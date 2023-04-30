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
);