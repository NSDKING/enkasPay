import { useLocation, useNavigate } from "react-router-dom"
import StafNavbar from "../components/StafNavbar";
import { useEffect, useState } from "react";
import { deleteUser } from "../graphql/mutations";
import { API, graphqlOperation } from "aws-amplify";


export default function CustomerData() {    
    const { state } = useLocation();
    const [loading, setLoading]= useState(false)
    const { item } = state;
    const navigate = useNavigate();

    
    const handleClickAccount= ()=>{
        navigate("/User-account-list", { state: {  item: item.id } }) 
    }

    const handleClickOrder = ()=>{
        navigate("/User-order-list", { state: {  item: item.id } }) 
    }
    
    const handleClickUpdate = ()=>{
        navigate("/customer-update ", { state: {  item: item.id } }) 
    }
    

    const DeleteFunction = async () => {
        const confirmDelete = window.confirm("Are you sure you want to delete this account?");
    
        if (!confirmDelete) {
          alert('Deletion canceled');
          return;
        }
    
        setLoading(true);
    
        try {
          
            const input = {
                id: item.id,
                _version: item._version,

              };

            const response = API.graphql(graphqlOperation(deleteUser, { input }));
          
          alert('user deleted successfully');
          navigate("/customer-list");
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      };
    


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
            <button className="button" onClick={handleClickUpdate}>
                    modifier
            </button>
            <button className="button" onClick={DeleteFunction}>
                    supprimer 
            </button>

        </section>
    )
    
}