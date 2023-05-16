
import netflix from './img/netim.png'
import './css/card.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { getCommonLikeRoomWithUser } from '../services/LikeRoom';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import { createCartRoom, createProductCartRoom, updateCartRoom } from '../graphql/mutations';

export default function Card({cover, title, price, type, setProdTitle, setProdPrice, setProdCover, setProdType, loading,setLoading }){
    const navigate = useNavigate();

    function handleClick(){

        setProdTitle(title);
        setProdType(type);
        setProdPrice(price);
        navigate('/ProductPage')
        setProdCover(cover)
 
        console.log(price)
       
    
    }

        

    const createALikeRoomWithTheUser = async(product)=>{
        // check if the product is already in the cart
        const existingLikeRoom = await getCommonLikeRoomWithUser(product.id);
        if (existingLikeRoom) {
          const input = { 
            id: existingLikeRoom.likeRoom.id,
            _version: existingLikeRoom.likeRoom._version,   
            number: existingLikeRoom.likeRoom.number + 1,
          };
          const result = await API.graphql(graphqlOperation(updateCartRoom, { input: input }));
          console.log(result)
          return;
        }
        //create a new LikeRooms and add it the auth user
        const AuthUser = await Auth.currentAuthenticatedUser();
        const newCartRoomData  = await API.graphql(
          graphqlOperation(createCartRoom, {input:{
            userID:AuthUser.attributes.sub
          }})
          )
          if(!newCartRoomData.data?.createRoomsubject){
            console.log('error creating the chat error')
          }
          const newCartRoom = newCartRoomData.data?.createRoomsubject;
  
        //add the cliked product to the LikeRooms
      await API.graphql(
          graphqlOperation(createProductCartRoom,{
            input:{cartRoomId:newCartRoom.id, productId:product.id},
          })
          
        )  
      
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
                    <button className='card-box-body-button' onClick={createALikeRoomWithTheUser}>
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