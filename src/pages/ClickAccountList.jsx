import { useLocation, useNavigate } from "react-router-dom";
import './css/clickAccount.css'
import StafNavbar from "../components/StafNavbar";
import { deleteAccount, createAccount } from "../graphql/mutations";
import { listAccounts } from "../graphql/queries";
import { API, graphqlOperation } from "aws-amplify";
import { useState, useEffect} from "react";
 
export default function ClickAccountList() {  
  const { state } = useLocation();
  const { item } = state;
  const [loading, setLoading]= useState(false)
  const [AccountList, setAccountList] = useState([]);
  const [profileList, setProfileList] = useState([])
  const [profileCreate, setProfileCreate] = useState([])
  const [createItemList, setCreateItemList] = useState([])
  const navigate = useNavigate();
 

  const handleClick = () => {
    navigate("/profile-list", { state: { mail: item.mail, remplissage: item.remplissage } });
  };

  const handleClick3 = () => {
    navigate("/update-accountList", { state: { item: item } });
  };

  const DeleteFunction = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this account?");

    if (!confirmDelete) {
      alert('Deletion canceled');
      return;
    }

    setLoading(true);

    try {
      const response = await Promise.all(
        profileList.map(async (item) => {
          const input = {
            id: item.id,
            _version: item._version,
          };
          return API.graphql(graphqlOperation(deleteAccount, { input }));
        })
      );

      console.log(response)

      alert('Account deleted successfully');
      navigate("/choose-accounts-list-type");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const getAccount = async () => {
    try {
      const response= await API.graphql(graphqlOperation(listAccounts, { limit: 1000 }));
      const NotDeleted = response.data.listAccounts.items.filter((item) => !item.deleted);

      setAccountList(NotDeleted)
     } catch (error) {
      console.error(error);
    }
  };

  const getProfile = () => {
    const profile = AccountList.filter((item) => item.mail === state.item.mail);
    setProfileList(profile);
  };

  const profilCreation = () => {
    const profilCreates = profileList.filter(
      (item) => item._deleted != true && (item.profil == "1" || item.profil == "2")
    );
    setProfileCreate(profilCreates);
  };
  

  const CreateFunction = async () => {
    if (loading) {
      alert('Loading...');
      return;
    }

      try {
        if (profileCreate.length == 4) {
          alert("Already created");
        } else {
           profileCreate.forEach(async (element) => {
            console.log(element)
        
            const newAccount = {
              mail: element.mail,
              profil: element.profil,
              passe:element.passe,
              endDateAccount:element.endDateAccount,
              endDateProfil:element.endDateProfilValue,
              pin:element.pin,
              numero:element.numero,
              userID:element.user,
              service:element.service,
              free:true,
            };
            const response =  await API.graphql(
              graphqlOperation(createAccount, { input: newAccount })
        
          );
          console.log(response)

          });
         alert("ok")
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAccount();
  }, []);

  useEffect(() => {
    getProfile();
  }, [AccountList]);

  useEffect(() => {
    profilCreation();
  }, [profileList]);

  return (
    <section>
      <StafNavbar />
      <h3>
        {item.mail} : {item.remplissage}
      </h3>
      <button className="button" onClick={handleClick}>
        Consult
      </button>
      <button className="button" onClick={handleClick3}>
        Update
      </button>
      <button className="button" onClick={DeleteFunction}>
        Delete
      </button>
      <button className="button" onClick={CreateFunction}>
        Create
      </button>
    </section>
  );
};

  
 