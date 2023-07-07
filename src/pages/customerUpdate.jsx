
import { useLocation, useNavigate } from "react-router-dom";
import './css/consultPage.css'
import { updateAccount, updateOrder, updateUser } from "../graphql/mutations";
import { API, graphqlOperation } from "aws-amplify";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useEffect } from "react";
import { listUsers } from "../graphql/queries";
import { listProducts } from "./store";



export default function CustomerUpdate() {
    const { state } = useLocation();
    const { item } = state;
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)
    const [userList, setUserList] = useState([])
    const [user, setUser] = useState([])
    const {formState: {errors}, handleSubmit, register, control, setValue} = useForm();

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

    const handleFormClick = async (data) => {
        if(loading){
            return;
        }
        
        setLoading(true)
        console.log(data)
        try {
            
            const input={
                id:user.id,
                phoneNumber:data.number,
                _version:user._version, 
            }
            const response= await API.graphql(graphqlOperation(updateUser, { input: input })); 
            console.log(response)
            alert('ok')
            navigate("/customer-list")

       
        }catch(e){
                console.log(e)
      
        }
        setLoading(false)
      }
      
    useEffect(() => {
        getListUsers()         
    }, [ ])

    useEffect(() => {
        GetTheUser() 
        console.log(user)        
    }, [ ])

    const GetTheUser = ()=>{
        setLoading(true)
        const user = userList.find(element => element.id=== item);
        setUser(user)
        setLoading(false)

    }
    return(
        <section>
                <div className="modal">
                            <div className="modal-content">
                            <form id="my-form"
                                    onSubmit={handleSubmit((data=>{handleFormClick(data)}))}>
 
                   
                            <input 
                                className='form-input'
                                {...register('number', { 
                                    required: 'entre ton numero comme celui ci:+237693040500',
                                    pattern: {
                                                value: /^\+(?:[0-9]\s?){6,14}[0-9]$/i,
                                                message: "entre ton numero comme celui ci:+237693040500"
                                            }
                                    })}
                                placeholder='saisissez votre numero de telephone'
                            />

                                {
                                    loading?(
                                        <p>loading...</p>
                                    ):
                                    (
                                        <input type="submit" id="add-client-btn"  />
                                    )
                                }
                         
                             
                                </form>

                                    <button 
                                        onClick={()=>{ navigate("/customer-list")}}
                                    >close the page</button>
                                

                             </div>
                        </div>

         </section>
         
    )
}
