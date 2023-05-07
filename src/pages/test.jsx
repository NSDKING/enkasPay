import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, Alert} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/core';
import {useForm} from 'react-hook-form';
import {Auth} from 'aws-amplify';

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const SignUpScreen = () => {
  const {control, handleSubmit, watch} = useForm();
  const pwd = watch('password');
  const navigation = useNavigation();

  const onRegisterPressed = async data => {
    const {username, password, email, name} = data;
    try {
      await Auth.signUp({
        username,
        password,
        attributes: {email, name, preferred_username: username},
      });

      navigation.navigate('ConfirmEmail', {username});
    } catch (e) {
      Alert.alert('Oops', e.message);
    }
  };

  const onSignInPress = () => {
    navigation.navigate('SignIn');
  };

  const onTermsOfUsePressed = () => {
    console.warn('onTermsOfUsePressed');
  };

  const onPrivacyPressed = () => {
    console.warn('onPrivacyPressed');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Create an account</Text>

        <CustomInput
          name="name"
          control={control}
          placeholder="Name"
          rules={{
            required: 'Name is required',
            minLength: {
              value: 3,
              message: 'Name should be at least 3 characters long',
            },
            maxLength: {
              value: 24,
              message: 'Name should be max 24 characters long',
            },
          }}
        />

        <CustomInput
          name="username"
          control={control}
          placeholder="Username"
          rules={{
            required: 'Username is required',
            minLength: {
              value: 3,
              message: 'Username should be at least 3 characters long',
            },
            maxLength: {
              value: 24,
              message: 'Username should be max 24 characters long',
            },
          }}
        />
        <CustomInput
          name="email"
          control={control}
          placeholder="Email"
          rules={{
            required: 'Email is required',
            pattern: {value: EMAIL_REGEX, message: 'Email is invalid'},
          }}
        />
        <CustomInput
          name="password"
          control={control}
          placeholder="Password"
          secureTextEntry
          rules={{
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password should be at least 8 characters long',
            },
          }}
        />
        <CustomInput
          name="password-repeat"
          control={control}
          placeholder="Repeat Password"
          secureTextEntry
          rules={{
            validate: value => value === pwd || 'Password do not match',
          }}
        />

        <CustomButton
          text="Register"
          onPress={handleSubmit(onRegisterPressed)}
        />

        <Text style={styles.text}>
          By registering, you confirm that you accept our{' '}
          <Text style={styles.link} onPress={onTermsOfUsePressed}>
            Terms of Use
          </Text>{' '}
          and{' '}
          <Text style={styles.link} onPress={onPrivacyPressed}>
            Privacy Policy
          </Text>
        </Text>

        <SocialSignInButtons />

        <CustomButton
          text="Have an account? Sign in"
          onPress={onSignInPress}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075',
  },
});

export default SignUpScreen;



```javascript
import React, { useState } from 'react';
import { useTransition, animated } from 'react-spring';

const steps = [
  {
    id: 0,
    title: 'Step 1',
    content: 'Content for step 1'
  },
  {
    id: 1,
    title: 'Step 2',
    content: 'Content for step 2'
  },
  {
    id: 2,
    title: 'Step 3',
    content: 'Content for step 3'
  }
];

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  
  const transitions = useTransition(steps[currentStep], item => item.id, {
    from: { transform: 'translate3d(100%,0,0)' },
    enter: { transform: 'translate3d(0%,0,0)' },
    leave: { transform: 'translate3d(-50%,0,0)' }
  });

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <div>
      {transitions.map(({ item, props, key }) => (
        <animated.div key={key} style={props}>
          <h2>{item.title}</h2>
          <p>{item.content}</p>
        </animated.div>
      ))}
      <button onClick={handleNext}>Continue</button>
    </div>
  );
};

"""


 
<CSSTransition
in={step === 2}
timeout={500}
classNames="step"
unmountOnExit
>
<form className='registerPage-body' onSubmit={handleSubmit2}> 
    <h2>créer un compte enkasPay</h2>


    <input 
        {...register('nom', { required: 'ceci est obligatoire'})}
        placeholder='   saisissez votre nom'
    />
 
 
    <input 
            {...register('prenom', { required: 'ceci est obligatoire'})}
            placeholder='   saisissez votre prenom'
        />
        
 
    <DefaultButton 
        text={"continuer"} 
        bgcolor={"#eb0625"} 
        textcolor={"white"} 
        width={"100%"} 
        height={"50px"} 
        marginTop={"30px"} 
        WebkitBoxShadow={'10px 10px 15px -10px rgba(245,59,80,1)'} 
        MozBoxShadow={'10px 10px 15px -10px rgba(245,59,80,1)'} 
        boxShadow={'10px 10px 15px -10px rgba(245,59,80,1)'}
          />

</form>
</CSSTransition>


<CSSTransition
in={step === 3}
timeout={500}
classNames="step"
unmountOnExit
>
<form className='registerPage-body' onSubmit={onSingUpPressed}>
    <h2>créer un compte enkasPay</h2>

    <input 
        {...register('city', { required: 'ceci est obligatoire'})}
        placeholder='   saisissez votre ville de residence'
    />
    <input 
        {...register('birthday', { required: 'ceci est obligatoire'})}
        placeholder='   saisissez votre date de naissance'
    />
    <input 
        {...register('number', { required: 'ceci est obligatoire'})}
        placeholder='   saisissez votre numero de telephone'
    />
 

    <DefaultButton 
        text={"continuer"} 
        bgcolor={"#eb0625"} 
        textcolor={"white"} 
        width={"100%"} 
        height={"50px"} 
        marginTop={"30px"} 
        WebkitBoxShadow={'10px 10px 15px -10px rgba(245,59,80,1)'} 
        MozBoxShadow={'10px 10px 15px -10px rgba(245,59,80,1)'} 
        boxShadow={'10px 10px 15px -10px rgba(245,59,80,1)'}
        />

</form>
</CSSTransition>

















const response =  await API.graphql(
  graphqlOperation(createUser, { input: newUser })
);nnn





Account.map((item =>(
  <tr key={item.id}>
      <td>{item.mail}</td>
      <td>{item.passe}</td>
      <td>{item.profil}</td>
      <td>{item.endDateAccount}</td>
      <td>{item.pin}</td>
      <td>test</td>
      <td>{item.numero}</td>
      <td>{item.endDateProfil}</td>

   
  </tr>
))

Accounts.map(item => (
  <tr key={item.id}>
      <td>{item.mail}</td>
      <td>{item.passe}</td>
      <td>{item.profil}</td>
      <td>{item.endDateAccount}</td>
      <td>{item.pin}</td>
      <td>test</td>
      <td>{item.numero}</td>
      <td>{item.endDateProfil}</td>
  </tr>
))


import { API, graphqlOperation } from 'aws-amplify';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { listAccounts } from '../graphql/queries';


export default function TakeAccount() {
    const { state } = useLocation();
    const { service } = state;
    const [Accounts, setAccount] = useState([])
    const [loading, setLoading] = useState(false)

      
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

    const getAccount = async()=>{
        if(loading){
            return;
        }
        setLoading(true)  

        try {

            const response= await API.graphql(graphqlOperation(listAccounts));
            console.log(response.data.listAccounts.items)    
            setAccount(response.data.listAccounts.items)
        }catch(e){
                console.log(e)

        }
        setLoading(false)

 
       }
    useEffect(() => {
       getAccount()
       TakeAccount()
         
    }, [ ])
     
    const handleAccount = ()=>{
        let theAccount =  {}
        Accounts.map((item)=>{
                if(item.free == true && item.service == service ){
                    theAccount = item
                    console.log(item)
                    console.log(service)
                    console.log(item.free)
                }
    })
  
    return(theAccount)

    }
    return(
        <section className="takeAccountPage">
            <header className='ManagementHeader'>
                <h1>ENKAS</h1>
            </header>
            <nav className="special_navbar">
                <Link to="/AddAccount" style={linkStyle}>ajouter</Link>
                <Link to="/ManageAccount" style={linkStyle}>prendre</Link>
                <Link to="/ConsultPage" style={linkStyle}>consulter</Link>
            </nav>
                
       
        </section>
    )
}

                
<div>
<p>mail: {TakeAccount().mail}</p>
<p>passe: {TakeAccount().passe}</p>
<p>profil: {TakeAccount().pin}</p>
<p>mail: {TakeAccount().mail}</p>

</div>

import netflix from './img/netim.png'
import './css/card.css'
import { Link } from 'react-router-dom'


export default function Card({cover, title, price, type, setProdTitle, setProdPrice, setProdCover, setProdType, cart, updateCart }){
    return(
        <Link className='card-box' style={{
            textDecoration:"none",
            color: 'black',
        }} to='/productPage'>
            <p className='card-box-p-header'>{type}</p>
            <div className='card-box-img'>
                <img src={cover} width={"25%"}/>
            </div>
            <div className='card-box-body'>
                <div  className='card-box-body-title'>
                    <p>{title} a partir de:</p>
                </div>
                <div className='card-box-body-bottom'>
                    <button className='card-box-body-button'>
                        <i className="fa fa-plus" style={{
                            fontSize:23,
                            color: 'white',                            
                        }}></i>

                    </button> 
                    <div className='card-box-body-price'>
                        <span>{price}</span>
                    </div>
                </div>

            </div>
        </Link>
    )


}









import Navbar from "../components/navbar"
import "./css/productpage.css"
import DefaultButton from '../components/DefaultButton'
import Card from "../components/card"
import warning from './img/warning.png'
import logo from './img/logo.png'

export default function ProductPage({cover, title, price, type, setProdTitle, setProdPrice, setProdCover, setProdType, cart, updateCart}) {
    return(
        <section className='productPage'>
            <Navbar></Navbar>
            <div className="Productimage">
             
            </div>
            {
                price.three_month === null ?
                <div className="ProductData">
                    <div className="ProductData-header">
                        <p className="ProductData-type">{type}</p>
                        <h2 className="ProductData-title">{title}</h2>
                        <p className="ProductData-price">{price.one_month}</p>
                    </div>
                  
                    <p className="ProductData-type"> quantité</p>
                    <div className="quantitybox"></div>
                </div>
            : 
                <div className="ProductData">
                    <div className="ProductData-header">
                        <p className="ProductData-type">{type}</p>
                        <h2 className="ProductData-title">{title}</h2>
                        <p className="ProductData-price">2500Fcfa</p>
                    </div>
                    <div className="ProductData-box-container">
                        <div className="ProductData-box" id="first">
                            <p>1 mois</p>
                        </div>
                        <div className="ProductData-box">
                            <p>3 mois</p>
                        </div>
                        <div className="ProductData-box">
                            <p>6 mois</p>
                        </div>
                    </div>
                    <p className="ProductData-type"> quantité</p>
                    <div className="quantitybox"></div>
                </div>
            }
            <div className="Productpage-buttons">
            <DefaultButton text={"ajouter au panier"} bgcolor={"#eb0625"} textcolor={"white"} width={"100%"} height={"50px"} marginTop={"20px"} />
            <DefaultButton text={"acheter maintenant"} bgcolor={"black"} textcolor={"white"} width={"100%"} height={"50px"} marginTop={"10px"}/>

            </div>
            <div className="ProductPage-message">
                <div className="ProductPage-message-header">
                    <img src={warning} width="16px" height="16px"/>
                    <h3>rapidité et efficacité</h3>
                </div>
                <p>
                    effectue ton achat et recois les identifiants 30minutes maximum apres le paiement
                </p>
            </div>

            <div className="defaultp">
                <p>
                    les clients ont egalement acheté:
                </p>
            </div>
            <div className="recom">
 
                
            </div>
         </section>
    )   
}