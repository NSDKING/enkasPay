import { API, graphqlOperation } from "aws-amplify";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getUser, listAccounts, listOrders, listUsers } from "../graphql/queries";
import StafNavbar from "../components/StafNavbar";
import { listProducts } from "./SaveOrder";


export default function UserOrderList(){  
    const { state } = useLocation();
    const { item } = state;
    const [Orders, setOrders] = useState([])
    const [UserOrderList, setUserOrderList] = useState([])
    const [loading, setLoading] = useState(false)
    const [userList, setUserList] = useState([])
    const navigate = useNavigate();
    const [Articles, setArticles] = useState([])
    const [ca, setCa] = useState([])
    

    const getProduct = async()=>{
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

    const getOrder = async()=>{
        if(loading){
            return;
        }
        setLoading(true)  

        try {

            const response= await API.graphql(graphqlOperation(listOrders));
            setOrders(response.data.listOrders.items)

         }catch(e){
                console.log(e)

        }
        setLoading(false)

 
       }

    const getUserOrders = () => {
        let list = []
        for(let i=0; i<=Orders.length; i++){
            if(Orders[i] != null){
                if(Orders[i].userID == item){
                    list.push(Orders[i])
                }
            }
        }
        setUserOrderList(list)

   }

    const getListUsers = async()=>{
        if(loading){
        return;
    }
    
    setLoading(true)
    try {
    
        const response= await API.graphql(graphqlOperation(listUsers));
        setUserList(response.data.listUsers.items)
    }catch(e){
            console.log(e)

    }
    setLoading(false)
    
    }
 
    useEffect(() => {
        getOrder()
        getListUsers()
        getProduct()
        console.log(item)

    }, [ ])


    useEffect(()=>{
        getUserOrders()
        getCA()
      }, [Orders])

    const handleName = (userid)=>{
        let username = " "
        userList.map((item)=>{
            if(item.id === userid){
                username = item.FamilyName +" "+ item.LastName
            }
        })
        return username

    }

    const handleNum = (userid)=>{
        let username = " "
        userList.map((item)=>{
            if(item.id === userid){
                username = item.phoneNumber
            }
        })
        return username

    }

    

    const getCA = ()=>{
        let number=0;
        for(let i=0;i<UserOrderList.length;i++){
            number = parseInt(UserOrderList[i].price)+number;
            console.log(number)
        }
         setCa(number) 
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
        <section>
            <StafNavbar></StafNavbar>
            <h2>{handleName(item)}</h2>
            <h2>{ca}</h2>
 
            <div className="tableContainer">
  
            <table>
                    <thead>
                        <tr>
                            <th>price</th>
                            <th>utilisateur</th>
                            <th>produit</th>
                            <th>date</th>
                            <th>numero</th>
                         </tr>
                    </thead>
                    <tbody>
                        {loading ? (
                            <h2>Loading...</h2>
                        ) : (
                            UserOrderList.filter(order =>{
                                if (order._deleted !=true) {
                                        return order;
                                        }     
                                }).map(order => (
                                    <tr key={order.id}>
                                        <td>{order.price}</td>
                                        <td>{handleName(order.userID)}</td>
                                        <td>{handleProductName(order.productID)}</td>
                                        <td>{order.date}</td>
                                        <td>{handleNum(order.userID)}</td>

                                     </tr>
                                ))
                        )} 
                        
                    </tbody>
                </table>

        </div>


        </section>
    )
    
}