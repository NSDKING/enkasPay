
import netflix from './img/netim.png'
import './css/card.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import { createCart, updateCart } from '../graphql/mutations';
import { getCommonCartRoomWithUser } from '../services/CartRoom';
  
export default function Card({articles, cover, title, price, type, setProdTitle, setProdPrice, setProdCover, setProdType, loading,setLoading }){
    const navigate = useNavigate();

    function handleClick(){

        setProdTitle(title);
        setProdType(type);
        setProdPrice(price);
        navigate('/ProductPage')
        setProdCover(cover)
 
        console.log(price)
       
    
    }

        

    const createACartWithTheUser = async(product)=>{
        try{
            //verify if the cart already exist
            const existantCartRoom = await getCommonCartRoomWithUser(product.id)
            if (existantCartRoom) {
                //verify if the CartRoom is deleted or not
                if(existantCartRoom._deleted ==true){
                      
            const authUser = await Auth.currentAuthenticatedUser({
                bypassCache: true,
              }); 
            const newCartRoomData = await API.graphql(
                graphqlOperation(createCart,{
                    input:{
                        number:1,
                        productID: product.id,
                        userID:authUser.attributes.sub,
                    },
                })
                
                )  
            alert("ajouté au panier")
 

                }else{
                    
                    const newNumber = existantCartRoom.number + 1
                    const input = { 
                        id: existantCartRoom.id,
                        _version: existantCartRoom._version,   
                        number: newNumber,
                       };
            
                    const result = await API.graphql(graphqlOperation(updateCart, { input: input }));
                    alert("ajouté au panier")
 
                }
                 return;
              }

            //try to create a cart
  
            const authUser = await Auth.currentAuthenticatedUser({
                bypassCache: true,
              }); 
            const newCartRoomData = await API.graphql(
                graphqlOperation(createCart,{
                    input:{
                        number:1,
                        productID: product.id,
                        userID:authUser.attributes.sub,
                    },
                })
                
                ) 
             alert("ajouté au panier")
 
        }
        catch(e){
            console.log(e)
        }
      
      }
    return(
        <div className='card-box' >
            <p className='card-box-p-header'>{type}</p>
            <div className='card-box-img' onClick={handleClick}>
                <img src={cover} />
            </div>
            <div className='card-box-body'>
                <div  className='card-box-body-title'>
                    <p>{title} a partir de:</p>
                </div>
                <div className='card-box-body-bottom'>
                    <button className='card-box-body-button' onClick={handleClick}>
                        <i className="fa fa-plus" style={{
                            fontSize:23,
                            color: 'white',                            
                        }}></i>

                    </button> 
                    <div className='card-box-body-price'>
                        <span>{price.one_month}FCFA</span>
                    </div>
                </div>

            </div>
        </div>
    )


}






export const listCartRooms = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
        id
        Carts {
            items {
              productID
              number
            }
          }
    }
  }
`;
 