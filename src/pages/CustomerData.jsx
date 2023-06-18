import { useLocation, useNavigate } from "react-router-dom"
import StafNavbar from "../components/StafNavbar";
import { useEffect } from "react";


export default function CustomerData() {    
    const { state } = useLocation();
    const { item } = state;
    const navigate = useNavigate();

    const handleClickAccount= ()=>{
        navigate("/User-account-list", { state: {  item: item } }) 
    }

    const handleClickOrder = ()=>{
        navigate("/User-order-list", { state: {  item: item } }) 
    }

    useEffect(()=>{
        console.log(item)
    },[])   
    return(
        <section>
            <StafNavbar/>
            
            <button className="button" onClick={handleClickAccount}>
                    Accounts
            </button>
            <button className="button" onClick={handleClickOrder}>
                    Orders
            </button>

        </section>
    )
    
}