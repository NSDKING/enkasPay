
import { useLocation, useNavigate } from "react-router-dom";
import './css/consultPage.css'
import { updateAccount, updateOrder } from "../graphql/mutations";
import { API, graphqlOperation } from "aws-amplify";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useEffect } from "react";
import { listUsers } from "../graphql/queries";
import { listProducts } from "./store";


export default function UpdateOrder() {
    const { state } = useLocation();
    const { item } = state;
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)
    const {formState: {errors}, handleSubmit, register, control, setValue} = useForm();
    const [userList, setUserList] = useState([])
    const [OrderList, setOrderList] = useState([]);
    const [Articles, setArticles] = useState([])

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
    
 
    const handleFormClick = async (data) => {
        if(loading){
            return;
        }
        
        setLoading(true)
        console.log(data)
        try {
            
            const input={
                id:item.id,
                price:data.price,
                userID:data.user,
                date:data.date,
                productID:data.product,
                _version:data._version, 

            }
            const response= await API.graphql(graphqlOperation(updateOrder, { input: input })); 
            console.log(response)
            alert('ok')
            navigate("/ConsultPage")

       
        }catch(e){
                console.log(e)
      
        }
        setLoading(false)
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
         getListUsers()
         getProducts()
          
     }, [ ])
     
    return(
        <section>
                <div className="modal">
                            <div className="modal-content">
                            <form id="my-form"
                                    onSubmit={handleSubmit((data=>{handleFormClick(data)}))}>

                                <label for="mail">price :</label>
                                <input 
                                    type="number" 
                                    id="price" 
                                    defaultValue={item.price}
                                    {...register('price', { required: 'ceci est obligatoire'})}
                                />

                                <label for="profil">date :</label>
                                <input 
                                    type="date" 
                                    id="date" 
                                    
                                    defaultValue={item.date}
                                    {...register('date', { required: false })}
                                />
                         
                                <label>utilisateur :</label>
                                
                                <input type="text" list="user" {...register('user', { required: false })} />

                                <datalist id="user">
                                    <option value=" ">Select...</option>

                                        {
                                            userList.map(item => (
                                                <option value={item.id} key={item.id}>{item.FamilyName +" "+ item.LastName}</option>
                                            ))
                                        }

                                </datalist>


                                <label>Product</label>

                                <input type="text" 
                                    list="product" 
                                    {...register('product', { required: 'ceci est obligatoire'})}
                                />
                                <datalist id="product">
                                        {
                                            Articles.map(item => (
                                                <option value={item.id} key={item.id}>{item.name}</option>
                                            ))
                                        }

                                </datalist>

                         
                                <input type="submit" id="add-client-btn"  />
                            
                                </form>
                    <button onClick={()=>{ navigate("/ConsultPage")}}>close the page</button>

                             </div>
                        </div>

         </section>
    )
}