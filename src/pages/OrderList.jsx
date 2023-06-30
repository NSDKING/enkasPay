import { useEffect, useState } from "react";
import StafNavbar from "../components/StafNavbar";
import { listOrders, listUsers } from "../graphql/queries";
import { API, graphqlOperation } from "aws-amplify";
import { listProducts } from "./store";
import { useNavigate } from 'react-router-dom';


export default function OrderList() {
    const [loading, setLoading] = useState(false);
    const [OrderList, setOrderList] = useState([]);
    const [userList, setUserList] = useState([])
    const [Articles, setArticles] = useState([])
    const navigate = useNavigate();

    
    const handleClick = (item) => {
        navigate("/update-OrderList", { state: { item:item } }) 
    
      }

    const getListUsers = async()=>{
        if(loading){
          return;
      }
      
      setLoading(true)
      try {
      
     const response= await API.graphql(graphqlOperation(listUsers, { limit: 1000 }));
        setUserList(response.data.listUsers.items)
       }catch(e){
              console.log(e)
    
      }
      setLoading(false)
     
      }

      const getProducts = async()=>{
        if(loading){
          return;
      }
      
      setLoading(true)
      try {
      
        const response= await API.graphql(graphqlOperation(listProducts));
        setArticles(response.data.listProducts.items)
     
      }catch(e){
              console.log(e)
     
      }
      setLoading(false)
     
      }

    
    const getOrder = async () => {
        if (loading) {
          return;
        }
        setLoading(true);
    
        try {
          const response = await API.graphql(graphqlOperation(listOrders));
          setOrderList(response.data.listOrders.items);
          console.log(response.data.listOrders.items)
        } catch (e) {
          console.log(e);
        }
        setLoading(false);
      }

    useEffect(() => {
        getOrder();
        getListUsers();
        getProducts()
      }, [])


      const handleName = (userid)=>{
        let username = " "
        userList.map((item)=>{
            if(item.id === userid){
                username = item.FamilyName +" "+ item.LastName
            }
        })
        return username

    }
    
    const handleProductName = (productID)=>{
        let productName = " "
        Articles.map((item)=>{
            if(item.id === productID){
                productName= item.name
            }
        })
        return productName

    }
 
    return(
        <div>
            <StafNavbar></StafNavbar>
            <div className="tableContainer">

            <table>
            <thead>
                <tr>
                <th>price</th>
                <th>name</th>
                <th>product</th>
             
                </tr>
            </thead>
            <tbody>
                {loading ? (
                <h2>Loading...</h2>
                ) : (
                    OrderList.map(item => (
                    <tr key={item.id} onClick={()=>{handleClick(item)}}>
                    <td className="std">{item.price}</td>
                    <td className="std">{handleName(item.userID)}</td>
                    <td className="std">{handleProductName(item.productID)}</td>
 
                    </tr>
                ))
                )}
            </tbody>
            </table>
            </div>
        </div>
    )
}
