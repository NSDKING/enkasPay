import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { API, graphqlOperation } from 'aws-amplify';
import { createOrder } from '../graphql/mutations';
import SelectFieldUser from '../components/SelectFieldUser';
import SelectField from '../components/SelectField';
import { listUsers } from '../graphql/queries';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './css/SaveOrder.css'
import StafNavbar from '../components/StafNavbar';


export default function SaveOrder() {
  const { handleSubmit, register, control } = useForm();
  const [userList, setUserList] = useState([])
  const [Articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
    
  const navigate = useNavigate();



  const priceOptions = [
    37000,
    8000,
    15000,
    7000,
    2850,
    6500,
    7500,
    2500,
    6000,
    25250,
    60000,
    19000,
  ];

  const onSubmit = async (data) => {
    try {
      let input= {
        price:data.price,
        userID:data.user,
        productID: data.product,
        date: data.date,
      }

    const newOrder = await API.graphql(graphqlOperation(createOrder, {input: input}))

      navigate("/ManageAccount")
    } catch (error) {
      console.error('Error creating order:', error);
    }
  };

  const getListUsers = async()=>{
    if(loading){
      return;
  }
  
  setLoading(true)
  try {
  
    const response= await API.graphql(graphqlOperation(listUsers));
     setUserList(response.data.listUsers.items)
     console.log(userList)
 
  }catch(e){
          console.log(e)

  }
  setLoading(false)
}
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

    const getProductbyID= (id)=>{
        let product 
        for(let i=0;i<Articles.length;i++){
            if(Articles[i].id==id){
               product= Articles[i]
             }

        }
        return product
    }

    useEffect(() => {
        getListUsers()
    
    }, [ ])

    useEffect(()=>{
        getProduct()

    }, [ ])
 
     
    const linkStyle = {
        float: "left",
        display: "block",
        color: '#fff',
        textAlign: "center",
        textDecoration: "none",
        paddingTop: "14px",
        paddingBottom: "14px",
        paddingRight:"16px",
        paddingLeft:"16px",
    }


  return (
    <section className='save-orderPage'>
    
        <StafNavbar></StafNavbar>
        <form onSubmit={handleSubmit(
            (data)=>{
                onSubmit(data)
            }
        )}>
            <label>User ID</label>
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

            
            <label>Price</label>
            <Controller
                name="price"
                control={control}
                defaultValue="37000"
                render={({ field }) => (
                    <select {...field} >
                        {priceOptions.map((price) => (
                                    <option key={price} value={price}>
                                        {price}
                                    </option>
                        ))}
                    </select>
                        )}
                    />
      
                

            <label>date</label>
            <input 
                type="date" 
                {...register('date', { required: 'ceci est obligatoire'})}
                />
            <button type="submit">Save Order</button>
        </form>
    </section>
  );
}
 


export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        OneYear {
          id
          price
        }
        OneMonth {
          id
          price
          _version
        }
        ThreeMonth {
          price
        }
        buycount
        cartCount
        image
        name
        id
        slug
        type
      }
      nextToken
      startedAt
    }
  }
`;