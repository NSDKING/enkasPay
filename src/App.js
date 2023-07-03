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
import { getUser } from './graphql/queries';
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
import CartPage from './pages/cartPage';
import UpdateAccount from './pages/updateAccount';
import ConfirmPage from './pages/ConfirmPage';
import DataRegistration from './pages/DataRegistration';
import ConfirmPageHelp from './pages/ConfirmPageHelp';
import SaveOrder from './pages/SaveOrder';
import Soon from './pages/soon';
import AccountSoon from './pages/AccountSoon';
import ProfileSoon from './pages/ProfileSoon';
import Today from './pages/Today';
import AccountToday from './pages/AccountToday';
import ProfileToday from './pages/ProfilToday';
import ClickAccount from './pages/clickAccount';
import ConsultAccount from './pages/ConsultAccount';
import CustomerList from './pages/CustomerList';
import CustomerData from './pages/CustomerData';
import UserAccountList from './pages/UserAccountList';
import UserOrderList from './pages/UserOrderList';
import AccountList from './pages/AccountList';
import ProfilAccountList from './pages/ProfileAccountList';
import ClickAccountList from './pages/ClickAccountList';
import UpdateAccountList from './pages/updateAccountList';
import OrderList from './pages/OrderList';
import { updateOrder } from './graphql/mutations';
import UpdateOrder from './pages/UpdateOrder';
import Past from './pages/past';
  
function App() {
  const [user, setUser]= useState(null)
  const [staf, setStaf]= useState(false)
  const [loading, setLoading] = useState(false)
  const [Articles, setArticles] = useState([])
  const [cart, setCart] = useState([])
  const [cartProduct, setCartProduct] = useState([])

  const [title ,setProdTitle] = useState()
  const [price ,setProdPrice] = useState()
  const [cover ,setProdCover] = useState()
  const [type ,setProdType] = useState()
  const [id ,setProdId] = useState()


  
 
  

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
      console.log(user)
 
 
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
                <Route exact path="/ProductPage/:slug" Component={ProductPage} />
          
          
                <Route path='/affiliation' Component={AffiliatePage}/>
                <Route path='/bundle' Component={BundlePage}/>
                <Route path='/' element={<StorePage
                                                      Articles={Articles} 
                                                      setArticles={setArticles} 
                                                      title={title} 
                                                      cover={cover} 
                                                      type={type} 
                                                      price={price} 
                                                      id={id}
                                                      setProdTitle={setProdTitle} 
                                                      setProdCover={setProdCover}                                
                                                      setProdPrice={setProdPrice} 
                                                      setProdType={setProdType} 
                                                      cart={cart}
                                                          
                                                      setProdId={setProdId}
                  />}
                  
                  />
  
                <Route path="/categories2" element={<CatPage2 
                                                      Articles={Articles} 
                                                      setArticles={setArticles} 
                                                      title={title} 
                                                      cover={cover} 
                                                      type={type} 
                                                      price={price} 
                                                      id={id}
                                                      setProdTitle={setProdTitle} 
                                                      setProdCover={setProdCover}                                
                                                      setProdPrice={setProdPrice} 
                                                      setProdType={setProdType} 
                                                      cart={cart}
                                                          
                                                      setProdId={setProdId}
                                                      />} exact />

              <Route path="/categories1" element={<CatPage 
                                                      Articles={Articles} 
                                                      setArticles={setArticles} 
                                                      title={title} 
                                                      cover={cover} 
                                                      type={type} 
                                                      price={price} 
                                                      id={id}
                                                      setProdTitle={setProdTitle} 
                                                      setProdCover={setProdCover}                                
                                                      setProdPrice={setProdPrice} 
                                                      setProdType={setProdType} 
                                                      cart={cart}
                                                          
                                                      setProdId={setProdId}
                                                      />} exact />
            <Route path="/categories3" element={<CatPage3
                                                      Articles={Articles} 
                                                      setArticles={setArticles} 
                                                      title={title} 
                                                      cover={cover} 
                                                      type={type} 
                                                      price={price} 
                                                      id={id}
                                                      setProdTitle={setProdTitle} 
                                                      setProdCover={setProdCover}                                
                                                      setProdPrice={setProdPrice} 
                                                      setProdType={setProdType} 
                                                      cart={cart}
                                                          
                                                      setProdId={setProdId}
                                                      />} exact />
              <Route path="/categories4" element={<CatPage4 
                                                       Articles={Articles} 
                                                      setArticles={setArticles} 
                                                      title={title} 
                                                      cover={cover} 
                                                      type={type} 
                                                      price={price} 
                                                      id={id}
                                                      setProdTitle={setProdTitle} 
                                                      setProdCover={setProdCover}                                
                                                      setProdPrice={setProdPrice} 
                                                      setProdType={setProdType} 
                                                      cart={cart}
                                                          
                                                      setProdId={setProdId}
                                                      />} exact />
            <Route path="/categories5" element={<CatPage5 
                                                       Articles={Articles} 
                                                      setArticles={setArticles} 
                                                      title={title} 
                                                      cover={cover} 
                                                      type={type} 
                                                      price={price} 
                                                      id={id}
                                                      setProdTitle={setProdTitle} 
                                                      setProdCover={setProdCover}                                
                                                      setProdPrice={setProdPrice} 
                                                      setProdType={setProdType} 
                                                      cart={cart}
                                                          
                                                      setProdId={setProdId}
                                                      />} exact />
          <Route path="/categories6" element={<CatPage6 
                                                       Articles={Articles} 
                                                      setArticles={setArticles} 
                                                      title={title} 
                                                      cover={cover} 
                                                      type={type} 
                                                      price={price} 
                                                      id={id}
                                                      setProdTitle={setProdTitle} 
                                                      setProdCover={setProdCover}                                
                                                      setProdPrice={setProdPrice} 
                                                      setProdType={setProdType} 
                                                      cart={cart}
                                                          
                                                      setProdId={setProdId}
                                                      />} exact />
              <Route path='/register-confirmation' Component={ConfirmPage}/>
              <Route path='/register-confirmation-help' Component={ConfirmPageHelp}/>
              <Route path='/data-registration' Component={DataRegistration}/>
                             
              
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
                           
                />}/>
                <Route path='/cart' Component={<CartPage
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
                                           

                />}/>
                  
                  <Route path='/affiliation' Component={AffiliatePage}/>
                  <Route path='/updateAccount' Component={UpdateAccount}/>
                  <Route path='/ManageAccount' Component={ManageAccount}/>
                  <Route path='/takeAccount' Component={takeAccount}/>
                  <Route path='/ConsultPage' Component={ConsultPage}/>
                  <Route path='/consult-account' Component={ConsultAccount}/>
                  <Route path='/AddAccount' Component={AddAccount}/>
                  <Route path='/SaveOrder' Component={SaveOrder}/>
                  <Route path='/today' Component={Today}/>
                  <Route path='/Account-today' Component={AccountToday}/>
                  <Route path='/Profile-today' Component={ProfileToday}/>
                  <Route path='/soon' Component={Soon}/>
                  <Route path='/Account-soon' Component={AccountSoon}/>
                  <Route path='/Profile-soon' Component={ProfileSoon}/>
                  <Route path='/bundle' Component={BundlePage}/>
                  <Route path='/customer-list' Component={CustomerList}/>
                  <Route path='/customer-data' Component={CustomerData}/>
                  <Route path='/profile-list' Component={ProfilAccountList}/>
                  <Route path='/click-account' Component={ClickAccount}/>
                  <Route path='/update-accountList' Component={UpdateAccountList}/>
                  <Route path='/update-OrderList' Component={UpdateOrder}/>
                  <Route path='/Past' Component={Past}/>               
                  <Route path='/click-accountList' Component={ClickAccountList}/>
                  <Route path='/User-account-list' Component={UserAccountList}/>
                  <Route path='/accounts-list' Component={AccountList}/>
                  <Route path='/User-order-list' Component={UserOrderList}/>
                  <Route path='/order-list' Component={OrderList}/>
                  <Route exact path="/ProductPage/:slug" Component={ProductPage} />
            
              
              <Route path="/categories2" element={<CatPage2 
                                                      Articles={Articles} 
                                                      setArticles={setArticles} 
                                                      title={title} 
                                                      cover={cover} 
                                                      type={type} 
                                                      price={price} 
                                                      id={id}
                                                      setProdTitle={setProdTitle} 
                                                      setProdCover={setProdCover}                                
                                                      setProdPrice={setProdPrice} 
                                                      setProdType={setProdType} 
                                                      cart={cart}
                                                          
                                                      setProdId={setProdId}
                                                      />} exact />

              <Route path="/categories1" element={<CatPage 
                                                       Articles={Articles} 
                                                      setArticles={setArticles} 
                                                      title={title} 
                                                      cover={cover} 
                                                      type={type} 
                                                      price={price} 
                                                      id={id}
                                                      setProdTitle={setProdTitle} 
                                                      setProdCover={setProdCover}                                
                                                      setProdPrice={setProdPrice} 
                                                      setProdType={setProdType} 
                                                      cart={cart}
                                                          
                                                      setProdId={setProdId}
                                                      />} exact />
            <Route path="/categories3" element={<CatPage3
                                                       Articles={Articles} 
                                                      setArticles={setArticles} 
                                                      title={title} 
                                                      cover={cover} 
                                                      type={type} 
                                                      price={price} 
                                                      id={id}
                                                      setProdTitle={setProdTitle} 
                                                      setProdCover={setProdCover}                                
                                                      setProdPrice={setProdPrice} 
                                                      setProdType={setProdType} 
                                                      cart={cart}
                                                          
                                                      setProdId={setProdId}
                                                      />} exact />
              <Route path="/categories4" element={<CatPage4 
                                                       Articles={Articles} 
                                                      setArticles={setArticles} 
                                                      title={title} 
                                                      cover={cover} 
                                                      type={type} 
                                                      price={price} 
                                                      id={id}
                                                      setProdTitle={setProdTitle} 
                                                      setProdCover={setProdCover}                                
                                                      setProdPrice={setProdPrice} 
                                                      setProdType={setProdType} 
                                                      cart={cart}
                                                          
                                                      setProdId={setProdId}
                                                      />} exact />
            <Route path="/categories5" element={<CatPage5 
                                                       Articles={Articles} 
                                                      setArticles={setArticles} 
                                                      title={title} 
                                                      cover={cover} 
                                                      type={type} 
                                                      price={price} 
                                                      id={id}
                                                      setProdTitle={setProdTitle} 
                                                      setProdCover={setProdCover}                                
                                                      setProdPrice={setProdPrice} 
                                                      setProdType={setProdType} 
                                                      cart={cart}
                                                          
                                                      setProdId={setProdId}
                                                      />} exact />
          <Route path="/categories6" element={<CatPage6 
                                                       Articles={Articles} 
                                                      setArticles={setArticles} 
                                                      title={title} 
                                                      cover={cover} 
                                                      type={type} 
                                                      price={price} 
                                                      id={id}
                                                      setProdTitle={setProdTitle} 
                                                      setProdCover={setProdCover}                                
                                                      setProdPrice={setProdPrice} 
                                                      setProdType={setProdType} 
                                                      cart={cart}
                                                          
                                                      setProdId={setProdId}
                                                      />} exact />
            <Route path='/register-confirmation' Component={ConfirmPage}/>
                             
              

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
                                             
                />}/>

                <Route path='/cart' element={<CartPage>

                </CartPage>}/>
                <Route path='/Account' Component={Account}/>
                 
                <Route path='/affiliation' Component={AffiliatePage}/>
                <Route path='/bundle' Component={BundlePage}/>
                <Route exact path="/ProductPage/:slug" Component={ProductPage} />
                
                <Route path="/categories2" element={<CatPage2 
                                                       Articles={Articles} 
                                                      setArticles={setArticles} 
                                                      title={title} 
                                                      cover={cover} 
                                                      type={type} 
                                                      price={price} 
                                                      id={id}
                                                      setProdTitle={setProdTitle} 
                                                      setProdCover={setProdCover}                                
                                                      setProdPrice={setProdPrice} 
                                                      setProdType={setProdType} 
                                                      cart={cart}
                                                          
                                                      setProdId={setProdId}
                                                      />} exact />

              <Route path="/categories1" element={<CatPage 
                                                       Articles={Articles} 
                                                      setArticles={setArticles} 
                                                      title={title} 
                                                      cover={cover} 
                                                      type={type} 
                                                      price={price} 
                                                      id={id}
                                                      setProdTitle={setProdTitle} 
                                                      setProdCover={setProdCover}                                
                                                      setProdPrice={setProdPrice} 
                                                      setProdType={setProdType} 
                                                      cart={cart}
                                                          
                                                      setProdId={setProdId}
                                                      />} exact />
            <Route path="/categories3" element={<CatPage3
                                                       Articles={Articles} 
                                                      setArticles={setArticles} 
                                                      title={title} 
                                                      cover={cover} 
                                                      type={type} 
                                                      price={price} 
                                                      id={id}
                                                      setProdTitle={setProdTitle} 
                                                      setProdCover={setProdCover}                                
                                                      setProdPrice={setProdPrice} 
                                                      setProdType={setProdType} 
                                                      cart={cart}
                                                          
                                                      setProdId={setProdId}
                                                      />} exact />
              <Route path="/categories4" element={<CatPage4 
                                                       Articles={Articles} 
                                                      setArticles={setArticles} 
                                                      title={title} 
                                                      cover={cover} 
                                                      type={type} 
                                                      price={price} 
                                                      id={id}
                                                      setProdTitle={setProdTitle} 
                                                      setProdCover={setProdCover}                                
                                                      setProdPrice={setProdPrice} 
                                                      setProdType={setProdType} 
                                                      cart={cart}
                                                          
                                                      setProdId={setProdId}
                                                      />} exact />
            <Route path="/categories5" element={<CatPage5 
                                                       Articles={Articles} 
                                                      setArticles={setArticles} 
                                                      title={title} 
                                                      cover={cover} 
                                                      type={type} 
                                                      price={price} 
                                                      id={id}
                                                      setProdTitle={setProdTitle} 
                                                      setProdCover={setProdCover}                                
                                                      setProdPrice={setProdPrice} 
                                                      setProdType={setProdType} 
                                                      cart={cart}
                                                          
                                                      setProdId={setProdId}
                                                      />} exact />
          <Route path="/categories6" element={<CatPage6 
                                                       Articles={Articles} 
                                                      setArticles={setArticles} 
                                                      title={title} 
                                                      cover={cover} 
                                                      type={type} 
                                                      price={price} 
                                                      id={id}
                                                      setProdTitle={setProdTitle} 
                                                      setProdCover={setProdCover}                                
                                                      setProdPrice={setProdPrice} 
                                                      setProdType={setProdType} 
                                                      cart={cart}
                                                          
                                                      setProdId={setProdId}
                                                      />} exact />
                              
              
        </Routes>
      </Router>
    </div>
  );
}

export default App;



export const listCartRooms = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
        id
        Carts {
            items {
              id
              number
              _version
              productID
              userID
              _deleted
            }
          }   
    }
  }
`;
 

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