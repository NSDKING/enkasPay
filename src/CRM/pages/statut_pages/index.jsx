import "./index.css";
import SHeader from "../../components/header";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { listProspects } from "../../../graphql/queries";
import { listUsers } from "../../../graphql/queries"; // Update the import path
import { API, graphqlOperation } from "aws-amplify";

export default function ConcluePage() {
    const [loading, setLoading] = useState(false);
    const [prospects, setProspects] = useState([]);
    const [userList, setUserList] = useState([]);
    const navigate = useNavigate();

    const currentStatue = "conclue";

    const getListUsers = async () => {
        if (loading) {
            return;
        }

        setLoading(true);
        try {
            const response = await API.graphql(graphqlOperation(listUsers, { limit: 1000 }));
            setUserList(response.data.listUsers.items);
        } catch (e) {
            console.log(e);
        }
        setLoading(false);
    };

    useEffect(() => {
        getProspect();
        getListUsers();
    }, []); // You don't need to include `prospects` in the dependencies since it doesn't affect the initial data fetching

    const getProspect = async () => {
        setLoading(true);
        try {
            const response = await API.graphql(graphqlOperation(listProspects));
            const allProspects = response.data.listProspects.items;

            // Filter prospects based on currentStatue
            const filteredProspects = allProspects.filter(prospect => prospect.statut === currentStatue);

            console.log(allProspects);
            setProspects(filteredProspects);
        } catch (e) {
            console.log(e);
        }
        setLoading(false);
    };

    const handleName = (userId) => {
        let username = " ";
        userList.forEach(item => {
            if (item.id === userId) {
                username = item.FamilyName + " " + item.LastName;
            }
        });
        return username;
    };

    return (
        <section>
            <SHeader />
            <h2>etat : {currentStatue}</h2>

            <section>
                {loading ? (
                    <h3>Loading...</h3>
                ) : prospects.length === 0 ? (
                    <h3>Personne dans cette catégorie</h3>
                ) : (
                    // Render your prospects list here
                    <div>
                        {prospects.map(prospect => (
                            // Render each prospect here
                            <div key={prospect.id} className='crm-line'>
                                <p>{handleName(prospect.userID)}</p>
                                <p>{prospect.valeur}</p>
                                <p>{prospect.contrat}</p>
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </section>
    );
}
