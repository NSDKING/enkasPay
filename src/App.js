 import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 import LoginPage from './pages/login';
import HomePage from './pages/Home';
import PasswordForgotPage from './pages/passwordForgotPage';
import RegisterPage from './pages/register';
import StorePage from './pages/store';
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
import CatPage from "./pages/CatPage1.jsx";
import CatPage2 from "./pages/CatPage2.jsx";
import CatPage3 from "./pages/CatPage3.jsx";
import CatPage4 from "./pages/CatPage4.jsx";
import CatPage5 from "./pages/CatPage5.jsx";
import CatPage6 from "./pages/CatPage6.jsx";
import Account from './pages/Account';
  
function App() {
  const [user, setUser]= useState(null)
  const [staf, setStaf]= useState(false)
  const [loading, setLoading] = useState(false)
  const [Articles, setArticles] = useState([])
  const [cart, updateCart] = useState([])
  const [title ,setProdTitle] = useState()
  const [price ,setProdPrice] = useState()
  const [cover ,setProdCover] = useState()
   const [type ,setProdType] = useState()
  

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
 
      setArticles(response.data.listProducts.items)
   
    }catch(e){
            console.log(e)
  
    }
    setLoading(false)
   
    }

  useEffect(
    () => {
      checkUser()
      getProduct()
      console.log(price)
      console.log(title)
      console.log(type)
 
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
                <Route path='/Account' Component={Account}/>
                <Route path='/login' Component={LoginPage}/>
                <Route path='/login' Component={LoginPage}/>
                <Route path='/password-reset' Component={PasswordForgotPage}/>
                <Route path='/password-reset-confirmation' Component={NewPassword}/>
                <Route path='/store' Component={StorePage}/>
                <Route path='/ProductPage' element={
                                                <ProductPage
                                                      Articles={Articles} 
                                                      setArticles={setArticles} 
                                                      title={title} 
                                                      cover={cover} 
                                                      type={type} 
                                                      price={price} 
                                                      setProdTitle={setProdTitle} 
                                                      setProdCover={setProdCover}                                
                                                      setProdPrice={setProdPrice} 
                                                      setProdType={setProdType} 
                                                      cart={cart}
                                                      updateCart={updateCart}   
                                                /> 
                }/>
                <Route path='/affiliation' Component={AffiliatePage}/>
                <Route path='/bundle' Component={BundlePage}/>
                <Route path='/' element={<StorePage
                                             Articles={Articles} 
                                            setArticles={setArticles} 
                                            title={title} 
                                            cover={cover} 
                                            type={type} 
                                            price={price} 
                                            setProdTitle={setProdTitle} 
                                            setProdCover={setProdCover}                                
                                            setProdPrice={setProdPrice} 
                                            setProdType={setProdType} 
                                            cart={cart}
                                            updateCart={updateCart}
                  />}
                  
                  />
  
                <Route path="/categories2" element={<CatPage2 
                                                      Articles={Articles} 
                                                      setArticles={setArticles}
                                                      title={title} 
                                                      cover={cover}
                                                      type={type} 
                                                      price={price} 
                                                      setProdTitle={setProdTitle} 
                                                      setProdCover={setProdCover}    
                                                      setProdPrice={setProdPrice} 
                                                      setProdType={setProdType} 
                                                      cart={cart}
                                                      updateCart={updateCart}
                                                      />} exact />

              <Route path="/categories1" element={<CatPage 
                                                      Articles={Articles} 
                                                      setArticles={setArticles}
                                                      title={title} 
                                                      cover={cover}
                                                      type={type} 
                                                      price={price} 
                                                      setProdTitle={setProdTitle} 
                                                      setProdCover={setProdCover}    
                                                      setProdPrice={setProdPrice} 
                                                      setProdType={setProdType} 
                                                      cart={cart}
                                                      updateCart={updateCart}
                                                      />} exact />
            <Route path="/categories3" element={<CatPage3
                                                      Articles={Articles} 
                                                      setArticles={setArticles}
                                                      title={title} 
                                                      cover={cover}
                                                      type={type} 
                                                      price={price} 
                                                      setProdTitle={setProdTitle} 
                                                      setProdCover={setProdCover}    
                                                      setProdPrice={setProdPrice} 
                                                      setProdType={setProdType} 
                                                      cart={cart}
                                                      updateCart={updateCart}
                                                      />} exact />
              <Route path="/categories4" element={<CatPage4 
                                                      Articles={Articles} 
                                                      setArticles={setArticles}
                                                      title={title} 
                                                      cover={cover}
                                                      type={type} 
                                                      price={price} 
                                                      setProdTitle={setProdTitle} 
                                                      setProdCover={setProdCover}    
                                                      setProdPrice={setProdPrice} 
                                                      setProdType={setProdType} 
                                                      cart={cart}
                                                      updateCart={updateCart}
                                                      />} exact />
            <Route path="/categories5" element={<CatPage5 
                                                      Articles={Articles} 
                                                      setArticles={setArticles}
                                                      title={title} 
                                                      cover={cover}
                                                      type={type} 
                                                      price={price} 
                                                      setProdTitle={setProdTitle} 
                                                      setProdCover={setProdCover}    
                                                      setProdPrice={setProdPrice} 
                                                      setProdType={setProdType} 
                                                      cart={cart}
                                                      updateCart={updateCart}
                                                      />} exact />
          <Route path="/categories6" element={<CatPage6 
                                                      Articles={Articles} 
                                                      setArticles={setArticles}
                                                      title={title} 
                                                      cover={cover}
                                                      type={type} 
                                                      price={price} 
                                                      setProdTitle={setProdTitle} 
                                                      setProdCover={setProdCover}    
                                                      setProdPrice={setProdPrice} 
                                                      setProdType={setProdType} 
                                                      cart={cart}
                                                      updateCart={updateCart}
                                                      />} exact />
                             
              
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
          <Route path='/Account' Component={Account}/>
          <Route path='/' element={<StorePage
                                            Articles={Articles} 
                                            setArticles={setArticles} 
                                            title={title} 
                                            cover={cover} 
                                            type={type} 
                                            price={price} 
                                            setProdTitle={setProdTitle} 
                                            setProdCover={setProdCover}                                
                                            setProdPrice={setProdPrice} 
                                            setProdType={setProdType} 
                                            cart={cart}
                                            updateCart={updateCart}
                />}/>
                <Route path='/cart'/>
                  
                  <Route path='/affiliation' Component={AffiliatePage}/>
                  <Route path='/ManageAccount' Component={ManageAccount}/>
                  <Route path='/takeAccount' Component={takeAccount}/>
                  <Route path='/ConsultPage' Component={ConsultPage}/>
                  <Route path='/AddAccount' Component={AddAccount}/>
                  <Route path='/bundle' Component={BundlePage}/>
                  <Route path='/ProductPage' element={
                                                <ProductPage
                                                      Articles={Articles} 
                                                      setArticles={setArticles} 
                                                      title={title} 
                                                      cover={cover} 
                                                      type={type} 
                                                      price={price} 
                                                      setProdTitle={setProdTitle} 
                                                      setProdCover={setProdCover}                                
                                                      setProdPrice={setProdPrice} 
                                                      setProdType={setProdType} 
                                                      cart={cart}
                                                      updateCart={updateCart}   
                                                /> 
                }/>
              
              <Route path="/categories2" element={<CatPage2 
                                                      Articles={Articles} 
                                                      setArticles={setArticles}
                                                      title={title} 
                                                      cover={cover}
                                                      type={type} 
                                                      price={price} 
                                                      setProdTitle={setProdTitle} 
                                                      setProdCover={setProdCover}    
                                                      setProdPrice={setProdPrice} 
                                                      setProdType={setProdType} 
                                                      cart={cart}
                                                      updateCart={updateCart}
                                                      />} exact />

              <Route path="/categories1" element={<CatPage 
                                                      Articles={Articles} 
                                                      setArticles={setArticles}
                                                      title={title} 
                                                      cover={cover}
                                                      type={type} 
                                                      price={price} 
                                                      setProdTitle={setProdTitle} 
                                                      setProdCover={setProdCover}    
                                                      setProdPrice={setProdPrice} 
                                                      setProdType={setProdType} 
                                                      cart={cart}
                                                      updateCart={updateCart}
                                                      />} exact />
            <Route path="/categories3" element={<CatPage3
                                                      Articles={Articles} 
                                                      setArticles={setArticles}
                                                      title={title} 
                                                      cover={cover}
                                                      type={type} 
                                                      price={price} 
                                                      setProdTitle={setProdTitle} 
                                                      setProdCover={setProdCover}    
                                                      setProdPrice={setProdPrice} 
                                                      setProdType={setProdType} 
                                                      cart={cart}
                                                      updateCart={updateCart}
                                                      />} exact />
              <Route path="/categories4" element={<CatPage4 
                                                      Articles={Articles} 
                                                      setArticles={setArticles}
                                                      title={title} 
                                                      cover={cover}
                                                      type={type} 
                                                      price={price} 
                                                      setProdTitle={setProdTitle} 
                                                      setProdCover={setProdCover}    
                                                      setProdPrice={setProdPrice} 
                                                      setProdType={setProdType} 
                                                      cart={cart}
                                                      updateCart={updateCart}
                                                      />} exact />
            <Route path="/categories5" element={<CatPage5 
                                                      Articles={Articles} 
                                                      setArticles={setArticles}
                                                      title={title} 
                                                      cover={cover}
                                                      type={type} 
                                                      price={price} 
                                                      setProdTitle={setProdTitle} 
                                                      setProdCover={setProdCover}    
                                                      setProdPrice={setProdPrice} 
                                                      setProdType={setProdType} 
                                                      cart={cart}
                                                      updateCart={updateCart}
                                                      />} exact />
          <Route path="/categories6" element={<CatPage6 
                                                      Articles={Articles} 
                                                      setArticles={setArticles}
                                                      title={title} 
                                                      cover={cover}
                                                      type={type} 
                                                      price={price} 
                                                      setProdTitle={setProdTitle} 
                                                      setProdCover={setProdCover}    
                                                      setProdPrice={setProdPrice} 
                                                      setProdType={setProdType} 
                                                      cart={cart}
                                                      updateCart={updateCart}
                                                      />} exact />
                             
              

          </Routes>
        </Router>
      </div>
    )
  }
  
  return (
    <div className="App">
      <Router>
        <Routes>
         
        <Route path='/' element={<StorePage
                                            Articles={Articles} 
                                            setArticles={setArticles} 
                                            title={title} 
                                            cover={cover} 
                                            type={type} 
                                            price={price} 
                                            setProdTitle={setProdTitle} 
                                            setProdCover={setProdCover}                                
                                            setProdPrice={setProdPrice} 
                                            setProdType={setProdType} 
                                            cart={cart}
                                            updateCart={updateCart}
                />}/>

                <Route path='/cart'/>
                <Route path='/Account' Component={Account}/>
                <Route path='/ProductPage' element={
                                                <ProductPage
                                                      Articles={Articles} 
                                                      setArticles={setArticles} 
                                                      title={title} 
                                                      cover={cover} 
                                                      type={type} 
                                                      price={price} 
                                                      setProdTitle={setProdTitle} 
                                                      setProdCover={setProdCover}                                
                                                      setProdPrice={setProdPrice} 
                                                      setProdType={setProdType} 
                                                      cart={cart}
                                                      updateCart={updateCart}   
                                                /> 
                }/>
                <Route path='/affiliation' Component={AffiliatePage}/>
                <Route path='/bundle' Component={BundlePage}/>
                
                <Route path="/categories2" element={<CatPage2 
                                                      Articles={Articles} 
                                                      setArticles={setArticles}
                                                      title={title} 
                                                      cover={cover}
                                                      type={type} 
                                                      price={price} 
                                                      setProdTitle={setProdTitle} 
                                                      setProdCover={setProdCover}    
                                                      setProdPrice={setProdPrice} 
                                                      setProdType={setProdType} 
                                                      cart={cart}
                                                      updateCart={updateCart}
                                                      />} exact />

              <Route path="/categories1" element={<CatPage 
                                                      Articles={Articles} 
                                                      setArticles={setArticles}
                                                      title={title} 
                                                      cover={cover}
                                                      type={type} 
                                                      price={price} 
                                                      setProdTitle={setProdTitle} 
                                                      setProdCover={setProdCover}    
                                                      setProdPrice={setProdPrice} 
                                                      setProdType={setProdType} 
                                                      cart={cart}
                                                      updateCart={updateCart}
                                                      />} exact />
            <Route path="/categories3" element={<CatPage3
                                                      Articles={Articles} 
                                                      setArticles={setArticles}
                                                      title={title} 
                                                      cover={cover}
                                                      type={type} 
                                                      price={price} 
                                                      setProdTitle={setProdTitle} 
                                                      setProdCover={setProdCover}    
                                                      setProdPrice={setProdPrice} 
                                                      setProdType={setProdType} 
                                                      cart={cart}
                                                      updateCart={updateCart}
                                                      />} exact />
              <Route path="/categories4" element={<CatPage4 
                                                      Articles={Articles} 
                                                      setArticles={setArticles}
                                                      title={title} 
                                                      cover={cover}
                                                      type={type} 
                                                      price={price} 
                                                      setProdTitle={setProdTitle} 
                                                      setProdCover={setProdCover}    
                                                      setProdPrice={setProdPrice} 
                                                      setProdType={setProdType} 
                                                      cart={cart}
                                                      updateCart={updateCart}
                                                      />} exact />
            <Route path="/categories5" element={<CatPage5 
                                                      Articles={Articles} 
                                                      setArticles={setArticles}
                                                      title={title} 
                                                      cover={cover}
                                                      type={type} 
                                                      price={price} 
                                                      setProdTitle={setProdTitle} 
                                                      setProdCover={setProdCover}    
                                                      setProdPrice={setProdPrice} 
                                                      setProdType={setProdType} 
                                                      cart={cart}
                                                      updateCart={updateCart}
                                                      />} exact />
          <Route path="/categories6" element={<CatPage6 
                                                      Articles={Articles} 
                                                      setArticles={setArticles}
                                                      title={title} 
                                                      cover={cover}
                                                      type={type} 
                                                      price={price} 
                                                      setProdTitle={setProdTitle} 
                                                      setProdCover={setProdCover}    
                                                      setProdPrice={setProdPrice} 
                                                      setProdType={setProdType} 
                                                      cart={cart}
                                                      updateCart={updateCart}
                                                      />} exact />
                             
              
        </Routes>
      </Router>
    </div>
  );
}

export default App;
