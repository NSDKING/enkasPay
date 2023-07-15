import { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { listAffiliations, listUsers } from '../graphql/queries';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import StafNavbar from '../components/StafNavbar';
import DefaultButton from '../components/DefaultButton';
import { createAffiliationContact, updateAffiliation } from '../graphql/mutations';
 

export default function StaffAffiliate () {
    const [userList, setUserList] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false);
    const [Affiliations, setAffiliations] = useState([])
    const navigate = useNavigate();
    const {formState: {errors}, handleSubmit, register} = useForm();

    const getAffiliation = async()=>{
 
        setLoading(true)  

        try {
            let listNotDeleted = []

            const response= await API.graphql(graphqlOperation(listAffiliations, { limit: 1000 }));
                        setAffiliations(response.data.listAffiliations.items)

            response.data.listAffiliations.items.forEach((element) => {
                            if(!element._deleted){
                                listNotDeleted.push(element)
                             
                            } 
                        });
            setAffiliations(listNotDeleted)
         }catch(e){
                console.log(e)
 
        }
        setLoading(false)

 
       }

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
        getAffiliation()
           
     }, [ ])
     
  

    const handleName = (userid)=>{
        let username = " "
        userList.map((item)=>{
            if(item.id === userid){
                username = item.FamilyName +" "+ item.LastName
            }
        })
        return username

    }


    const handleAffiliationData = (affiliationID)=>{
        let affiliationData = {}
         Affiliations.forEach((item)=>{
            if(item.id === affiliationID){
                affiliationData= item;
            }
         })
         return affiliationData;
    }
    

 
    const onPressed = async (data) =>{
        if(loading){
            console.log("loading.............")
            return;
        }
        
        setLoading(true)
        try {

            const input = {
                userID:data.userID,
                affiliationID:data.affiliationID,
                
            }
            
            const response =  await API.graphql(
                graphqlOperation(createAffiliationContact, { input: input })
            );

            let previousCa = handleAffiliationData(data.affiliationID).ca
            let newca = previousCa+ 500

            let previousuti = handleAffiliationData(data.affiliationID).utilisations
            let newuti = previousuti+ 1

            const UpdateInput = {
                id: handleAffiliationData(data.affiliationID).id,
                ca:newca,
                utilisations:newuti,
                _version: handleAffiliationData(data.affiliationID)._version,
            }

            const updateResponse = await  API.graphql(
                graphqlOperation(updateAffiliation, {input:UpdateInput}))
            navigate("/ManageAccount")

        }catch(e){
            setError(e.message)
            console.log(e)
        }
        setLoading(false)
        
 

     }   

    return(
        <section>
            <StafNavbar/>
            <form className='registerPage-body' 
                    onSubmit={handleSubmit((data=>{
                    onPressed(data)
                }))}> 
                        <p className={error? 'text-error': 'none'} >{error}</p>

                        <input 
                                type="text" 
                                list="userID" 
                                {...register('userID', { required: true })} 
                                placeholder="nom de l'utilisateur"
                                />

                        <datalist id="userID">
                            <option value=" ">Select...</option>

                                {
                                    userList.map(item => (
                                        <option value={item.id} key={item.id}>{item.FamilyName +" "+ item.LastName}</option>
                                    ))
                                }

                        </datalist>


                        <input 
                                type="text" 
                                list="affiliationID" 
                                {...register('affiliationID', { required: true })} 
                                placeholder="nom de l'affilié"
                                />

                        <datalist id="affiliationID">
                            <option value=" ">Select...</option>

                                {
                                    Affiliations.map(item => (
                                        <option value={item.id} key={item.id}>{handleName(item.userID)}</option>
                                    ))
                                }

                        </datalist>


                        <DefaultButton text={loading?'loading...':'submit'} bgcolor={"#eb0625"} textcolor={"white"} width={"100%"} height={"50px"} marginTop={"30px"} WebkitBoxShadow={'10px 10px 15px -10px rgba(245,59,80,1)'} MozBoxShadow={'10px 10px 15px -10px rgba(245,59,80,1)'} boxShadow={'10px 10px 15px -10px rgba(245,59,80,1)'} type={'submit'}/>

            
                    </form>

        </section>

    )
}
