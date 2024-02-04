import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom';


export default function StafNavbar() {
    const navigate = useNavigate();

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

    return(
        <section className="StafNavbar">
            <header className='ManagementHeader' onClick={()=>{navigate("/ManageAccount")}}>
                <h1>ENKAS</h1>
            </header>
                <nav className="special_navbar">
                    <Link to="/AddAccount" style={linkStyle}>ajouter</Link>
                    <Link to="/ManageAccount" style={linkStyle}>prendre</Link>
                    <Link to="/soon" style={linkStyle}>soon</Link>
                    <Link to="/finshprofils" style={linkStyle}>finish</Link>
                    <Link to="/SaveOrder" style={linkStyle}>order</Link>
                    <Link to="/today" style={linkStyle}>today</Link>
                    <Link to="/customer-list" style={linkStyle}>clients</Link>
                    <Link to="/choose-accounts-list-type" style={linkStyle}>comptes</Link>
                    <Link to="/order-list" style={linkStyle}>OrderList</Link>
                    <Link to="/Past" style={linkStyle}>past</Link>
                    {/*<Link to="/PaymentList-enkas" style={linkStyle}>payment</Link>*/}
                    <Link to="/change-price-selector" style={linkStyle}>prix</Link>
                    <Link to="/PaymentList-Compta" style={linkStyle}>compta</Link>
                    <Link to="/PaymentList-Advance" style={linkStyle}>avance</Link>
                    <Link to="/PaymentList-Board" style={linkStyle}>Board</Link>
                </nav>
        </section>
    )
}
 
   
