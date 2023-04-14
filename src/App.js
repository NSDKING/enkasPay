 import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import LoginPage from './pages/login';
import HomePage from './pages/Home';
import PasswordForgotPage from './pages/passwordForgotPage';
import RegisterPage from './pages/register';
import storePage from './pages/store';
import ProductPage from './pages/ProductPage';
import AffiliatePage from './pages/Affiliate';
import BundlePage from './pages/bundlePage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' Component={HomePage}/>
          <Route path='/cart'/>
          <Route path='/password-reset' Component={PasswordForgotPage}/>
          <Route path='/login' Component={LoginPage}/>
          <Route path='/store' Component={storePage}/>
          <Route path='/register' Component={RegisterPage}/>
          <Route path='/ProductPage' Component={ProductPage}/>
          <Route path='/affiliation' Component={AffiliatePage}/>
          <Route path='/bundle' Component={BundlePage}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
