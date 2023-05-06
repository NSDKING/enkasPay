 import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 import LoginPage from './pages/login';
import HomePage from './pages/Home';
import PasswordForgotPage from './pages/passwordForgotPage';
import RegisterPage from './pages/register';
import storePage from './pages/store';
import ProductPage from './pages/ProductPage';
import AffiliatePage from './pages/Affiliate';
import BundlePage from './pages/bundlePage';
import NewPassword from './pages/newPassword';
import { Auth, Hub } from 'aws-amplify';
import { useEffect, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { getUser, listProducts } from './graphql/queries';
import ManageAccount from './pages/ManageAccount';
import ConsultPage from './pages/ConsultPage';
import AddAccount from './pages/addAccount';
import takeAccount from './pages/takeAccount';

 
function App() {
  const [user, setUser]= useState(null)
  const [staf, setStaf]= useState(false)
  const [loading, setLoading] = useState(false)
  

  const checkUser = async ()=>{
    try {
        const authUser = await Auth.currentAuthenticatedUser({
            bypassCache: true,
          });
        const userData = await API.graphql(
            graphqlOperation(getUser, { id: authUser.attributes.sub })
          );
      setUser(authUser)
      setStaf(userData.data.getUser.staff)
       console.log(authUser)

    } catch(e){
        setUser(null);

    }
 
    }
  const getProduct = async()=>{
    if(loading){
      return;
  }
  
  setLoading(true)
  try {
  
    const response= await API.graphql(graphqlOperation(listProducts));
    console.log(response)
 
  }catch(e){
          console.log(e)

  }
  setLoading(false)
 
  }
  useEffect(
    () => {
      checkUser()
      getProduct()
    },
    [],
  )
  useEffect(() => {
  
    const listener =  (data) => {
      if(data.payload.event === 'signIn' || data.payload.event === 'signOut' ){
        checkUser();
      }
    }
    Hub.listen('auth', listener)
    return () => Hub.remove('auth', listener)

  }, [ ])

  if(user===null){
    return(
      <div className="App">
      <Router>
        <Routes>
                <Route path='/register' Component={RegisterPage}/>
                <Route path='/login' Component={LoginPage}/>
                <Route path='/login' Component={LoginPage}/>
                <Route path='/password-reset' Component={PasswordForgotPage}/>
                <Route path='/password-reset-confirmation' Component={NewPassword}/>
                <Route path='/store' Component={storePage}/>
                <Route path='/ProductPage' Component={ProductPage}/>
                <Route path='/affiliation' Component={AffiliatePage}/>
                <Route path='/bundle' Component={BundlePage}/>
                <Route path='/' Component={storePage}/>
              
        </Routes>
      </Router>
    </div>
    )
    
  }
  if(staf == true){
    return(
      <div className="App">
        <Router>
          <Routes>
          
                  <Route path='/' Component={storePage}/>
                  <Route path='/cart'/>
                  <Route path='/store' Component={storePage}/>
                  <Route path='/ProductPage' Component={ProductPage}/>
                  <Route path='/affiliation' Component={AffiliatePage}/>
                  <Route path='/ManageAccount' Component={ManageAccount}/>
                  <Route path='/takeAccount' Component={takeAccount}/>
                  <Route path='/ConsultPage' Component={ConsultPage}/>
                  <Route path='/AddAccount' Component={AddAccount}/>
                  <Route path='/bundle' Component={BundlePage}/>

              

          </Routes>
        </Router>
      </div>
    )
  }
  
  return (
    <div className="App">
      <Router>
        <Routes>
         
                <Route path='/' Component={storePage}/>
                <Route path='/cart'/>
                <Route path='/store' Component={storePage}/>
                <Route path='/ProductPage' Component={ProductPage}/>
                <Route path='/affiliation' Component={AffiliatePage}/>
                <Route path='/bundle' Component={BundlePage}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
