import CrmNavbar from "../components/CrmNavbar";
import { API, graphqlOperation } from 'aws-amplify';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./css/ProspectPage.css";
import CrmLine from "../components/crmLine";
import { listProspects, listUsers } from "../../graphql/queries";
 
export default function ProspectPage() {
  const [loading, setLoading] = useState(false);
  const [prospects, setProspects] = useState([]);
  const [userList, setUserList] = useState([])
  const navigate = useNavigate();

  const getListUsers = async()=>{
      if(loading){
        return;
    }
    
    setLoading(true)
    try {
   const response= await API.graphql(graphqlOperation(listUsers, { limit: 1000 }));
      setUserList(response.data.listUsers.items)
      navigate("/crm-prospect")
    }catch(e){
      console.log(e)
  
    }
    setLoading(false)
   
    }
  useEffect(() => {
      getListUsers()
  
  }, [])

  useEffect(() => {
    getProspect();
  }, []);

  //get the Prospect contact
  const getProspect = async () => {
    setLoading(true);  
    try {
      const response = await API.graphql(graphqlOperation(listProspects));
      console.log(response.data.listProspects.items);
      setProspects(response.data.listProspects.items);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  const handleName = (userid)=>{
    let username = " "
    userList.map((item)=>{
        if(item.id === userid){
            username = item.FamilyName +" "+ item.LastName
        }
    })
    return username

}

  return (
    <section className="ProspectPage">
      <CrmNavbar></CrmNavbar>
      <div className="crm-tableContainer">
        <div>
          <div className="crm-head-table">
            <div className="crm-head-table-box">
              <h3>contrat</h3>
            </div>
            <div className="crm-head-table-box">
              <h3>statut</h3>
            </div>
            <div className="crm-head-table-box">
              <h3>valeur</h3>
            </div>
            <div className="crm-head-table-box">
              <h3>nom</h3>
            </div>
          </div>
          <div className="crm-tbody">
            {prospects.map((prospect) => (
              <CrmLine
                key={prospect.id} // Add a unique key for each prospect
                item={prospect} 
                contrat={prospect.contrat}
                statut={prospect.statut}
                valeur={prospect.valeur}
                nom={handleName(prospect.userID)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
