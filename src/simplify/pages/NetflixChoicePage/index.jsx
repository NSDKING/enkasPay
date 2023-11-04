import React, { useState, useEffect } from 'react';
import { Auth, API, graphqlOperation } from 'aws-amplify';
import './index.css'; // Import your page's CSS file
import Modal from '../../components/Modal';
import DefaultButton from '../../../components/DefaultButton';
import { useNavigate } from "react-router-dom";
import { getUser } from '../../../graphql/queries';

 
export default function NetflixChoicePage() {
  const [UserData, setUserData] = useState(undefined);
  const [user, setUser] = useState(undefined);
  const [solde, setSolde] = useState(undefined);
  const oneMonth = 2850;
  const threeMonth = 6500;
  const oneYear = 25250;
  const [showInsufficientFundsModal, setShowInsufficientFundsModal] = useState(false);
  const [close, setClose] = useState(false);
  const navigate = useNavigate();

  const handlePurchase = (amount) => {
    if (solde >= amount) {
      // Proceed with the purchase logic
    } else {
      setShowInsufficientFundsModal(true);
      
    }
  };

  useEffect(() => {
    const checkUser = async () => {
      try {
        const authUser = await Auth.currentAuthenticatedUser({
          bypassCache: true,
        });
        const userData = await API.graphql(graphqlOperation(getUser, { id: authUser.attributes.sub }));
        setUserData(userData.data.getUser);
        UserData.solde ? setSolde(UserData.solde) : setSolde(0);
        setUser(true)
      } catch (e) {
        console.log(e)
    }
    };

    checkUser();
  }, []);
  const closeModal = () => {
    setShowInsufficientFundsModal(false);
  };
  
  return (
    <section className="NetflixChoicePage">
      <Modal isOpen={showInsufficientFundsModal} onClose={closeModal}>
        <div>
            <p>fonds insuffisants pour effectuer cette transaction recharcher votre solde</p>
            <p onClick={()=>{
                        if(user==undefined){
                            navigate('/simplify-website')
                        }
                        else(
                            navigate("/user-account-info")
                        )
          }}>ici</p>
        </div>
      </Modal>

      <DefaultButton text={'12mois: 25250'} bgcolor={"#f6dfe2"} textcolor={"#eb0625"} width={"80%"} height={"50px"} marginTop={"30px"} WebkitBoxShadow={'10px 10px 15px -10px rgba(245,59,80,1)'} MozBoxShadow={'10px 10px 15px -10px rgba(245,59,80,1)'} boxShadow={'10px 10px 15px -10px rgba(245,59,80,1)'} onPress={()=>{handlePurchase(oneYear)}}/>                  
      <DefaultButton text={'3mois: 6500'} bgcolor={"#f6dfe2"} textcolor={"#eb0625"} width={"80%"} height={"50px"} marginTop={"30px"} WebkitBoxShadow={'10px 10px 15px -10px rgba(245,59,80,1)'} MozBoxShadow={'10px 10px 15px -10px rgba(245,59,80,1)'} boxShadow={'10px 10px 15px -10px rgba(245,59,80,1)'} onPress={()=>{handlePurchase(threeMonth)}}/>                  
      <DefaultButton text={'1mois: 2850'} bgcolor={"#f6dfe2"} textcolor={"#eb0625"} width={"80%"} height={"50px"} marginTop={"30px"} WebkitBoxShadow={'10px 10px 15px -10px rgba(245,59,80,1)'} MozBoxShadow={'10px 10px 15px -10px rgba(245,59,80,1)'} boxShadow={'10px 10px 15px -10px rgba(245,59,80,1)'} onPress={()=>{handlePurchase(oneMonth)}}/>                  
    
    </section>
  );
}

 