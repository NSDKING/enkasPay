import { useEffect, useState } from 'react';
import "./index.css"
import { listProspects } from "../../../graphql/queries";
import { useNavigate } from 'react-router-dom';
import { API, graphqlOperation } from 'aws-amplify';
import SHeader from '../../components/header';



export default function CrmHomePage() {
  const [searchQuery, setSearchQuery] = useState('');
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
    }catch(e){
        console.log(e)

    }
    setLoading(false)
    
  }
  
  useEffect(() => {
    getListUsers()

}, [])

 


const handleName = (userid)=>{
    let username = " "
    userList.map((item)=>{
        if(item.id === userid){
            username = item.FamilyName +" "+ item.LastName
        }
    })
    return username

}

    const filteredUsers = userList.filter((user) => {
        const { FamilyName, LastName, phoneNumber, mail } = user;
        const searchLower = searchQuery.toLowerCase();

        return (
        FamilyName.toLowerCase().includes(searchLower) ||
        LastName.toLowerCase().includes(searchLower) ||
        (phoneNumber && phoneNumber.includes(searchQuery)) ||
        (mail && mail.toLowerCase().includes(searchLower))
        );
    });


    return(
        <section className="crm-HomePage">
           <SHeader/>
           <div  className="search-container">
            <input
                    type="text"
                    placeholder="Search a prospect"
                    value={searchQuery}
                    onChange={event => setSearchQuery(event.target.value)}
                    
                />
           </div>
           <div className="crm-tbody">
           {loading ? (
              <h2>Loading...</h2>
            ) : (
              filteredUsers.filter(item => !item._deleted).map(item => (
                <div key={item.id} className='crm-line' onClick={()=>{
                    navigate("/crm-Home-click", { state: {  user: item } }) 

                }}>
                    <div className='nameBox'>
                        <p>{item.FamilyName}</p>

                    </div>
                  <p>{item.pbcount}</p>
                  <p>{item.goodcount}</p>
             
                </div>
              ))
            )}
          </div>
        </section>
    )
}



export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
        items {
            Descriptions {
              items {
                title
                text
                _deleted
                _version
                id
              }
            }
            FamilyName
            LastName
            Prospects {
              items {
                statut
                valeur
                contrat
                id
                _deleted
                _version
              }
            }
            _version
            _deleted
            id
            mail
            goodcount
            pbcount
            phoneNumber
          }

    }
  }
`;
