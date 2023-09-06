import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SHeader from "../../components/header";
import { API, graphqlOperation } from "aws-amplify";
import "./index.css"

export default function Prospect() {
    const { state } = useLocation();
    const user = state || {}; // Safely access user object and provide an empty object as a fallback
    const navigate = useNavigate();

    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const [filteredProspects, setFilteredProspects] = useState([]);

    useEffect(() => {
        console.log(user.user)

            // Define a function to fetch user data and their prospects
    async function fetchUserProspects() {
        try {
            // Check if user and user.id are defined before making the API call
            if (user &&user.user.id ) {
                // Make an API call to fetch user data and their associated prospects
                const response = await API.graphql(graphqlOperation(getUser, { id: user.user.id }));
                const userData = response.data.getUser;
                const userProspects = userData?.Prospects?.items || [];
                console.log(userProspects)
                // Filter prospects based on the search query
                const filtered = userProspects.filter((prospect) => {
                    const { statut, contrat } = prospect;
                    const searchLower = searchQuery.toLowerCase();
                    return (
                        statut.toLowerCase().includes(searchLower) ||
                        contrat.toLowerCase().includes(searchLower)
                    );
                });

                // Update the filtered prospects state
                setFilteredProspects(filtered);
            }
                
            console.log(filteredProspects)

        } catch (error) {
            console.error("Error fetching user prospects:", error);
        }
    }

    // Call the fetchUserProspects function when user or searchQuery changes
    fetchUserProspects();
 
        
    }, [user, searchQuery]);

    return (
        <section className="prospectPage">
            <SHeader />
            <div className="head">
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Search a prospect"
                        value={searchQuery}
                        onChange={(event) => setSearchQuery(event.target.value)}
                    />
                </div>
                <div className="add" onClick={() => { navigate("/crm-add-line", { state: { userID: user.user.id} }); }}>
                    <p>add</p>
                </div>

                <div className="add" onClick={() => { navigate("/crm-point-click", { state: { user: user} }); }}>
                    <p>point</p>
                </div>

            </div>
            <div className="Pro-body">
                {/* Render filtered prospects here */}
                {filteredProspects.map((prospect, index) => (
                    // Check if the prospect should be displayed based on _deleted value
                    !prospect._deleted && (
                        <div key={prospect.id} className='crm-line' onClick={()=>{
                            console.log(prospect.id)
                            navigate("/crm-pros-click", { state: { ProspectID: prospect} })
                        }}>
                            <div className='nameBox'>
                                <p>{prospect.statut}</p>
                            </div>
                            <p>{prospect.contrat}</p>
                            <p>{prospect.valeur}</p>
                        </div>
                    )
                ))}
            </div>
        </section>
    );
}

// Import the getUser GraphQL query and use it in your component

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
        Prospects {
            items {
              _version
              _deleted
              statut
              contrat
              valeur
              id
            }
          }
    }
  }
`;
