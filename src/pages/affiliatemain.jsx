import React, { useEffect, useState } from "react";
import DefaultButton from "../components/DefaultButton";
import Navbar from "../components/navbar";
import "./css/AffiliateMain.css";
import { API, Auth, graphqlOperation } from "aws-amplify";

export default function AffiliateMain() {
  const [AffiliationData, setAffiliationData] = useState([]);
  const [AffData, setAffData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getAffiliationData = async () => {
      try {
        setLoading(true);
        const authUser = await Auth.currentAuthenticatedUser({ bypassCache: true });
        const response = await API.graphql(graphqlOperation(getUserAffiliation, { id: authUser.attributes.sub }));
        setAffiliationData(response.data.getUser.Affiliations.items);
       } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getAffiliationData();
  }, []);

  useEffect(()=>{

    const RetreiveNotDeletedAffiliation = ()=>{
        let listNotDeleted = []
        AffiliationData.forEach((element) => {
            if (!element._deleted){
                listNotDeleted.push(element)
             
            } 
        });
        setAffData(listNotDeleted[0])
    }
    RetreiveNotDeletedAffiliation()
    console.log(AffData)
  }, [AffiliationData])

  const handleClick = async () => {
    window.location.href = "https://wa.me/237652737914";
  };

  return (
    <section>
      <Navbar />
      <div className="marge"></div>

      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <section className="AffiliationMainPage">
             {
              AffData==null?(
                    <h2>Loading...</h2>
                    
                ):(
               <section className="AffiliationMainPage">

                <div className="Aff-head">
                      <p className="ca">
                          {AffData.ca} Fcfa
                      </p>
                      <div className="codeBox">
                          <p>
                              {AffData.code} 
                          </p>
                      </div>
                  </div>

                  <div className="Aff-midle">
                          <p>
                          nombre d’utilisation: {AffData.utilisations} 
                          </p>
                  </div>

                  <DefaultButton
                    text={"recuperer mon argent"}
                    bgcolor={"#eb0625"}
                    textcolor={"white"}
                    width={"70%"}
                    height={"50px"}
                    marginTop={"20px"}
                    onPress={handleClick}
                  />
               </section>
                )
       
             }
       
         
        </section>
      )}
    </section>
  );
}

export const getUserAffiliation = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      Affiliations {
        items {
          _version
          _deleted
          ca
          code
          utilisations
          id
          statut
        }
      }
    }
  }
`;
