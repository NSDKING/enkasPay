import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import './css/updateCrmLine.css'; // Import the CSS file



export default function UpdateCrmLine({ crmLineId }) {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { item } = state;
  const {formState: {errors}, handleSubmit, register, control} = useForm();
  const handleUpdate = (data) => {
    // Perform the update logic here using the data object
    // For simplicity, we'll just log the data values in this example
    console.log("Updated contrat:", data.contrat);
    console.log("Updated statut:", data.statut);
    console.log("Updated valeur:", data.valeur);
    console.log("Updated nom:", data.nom);
  };

  return (
    <div className="updateCrmLine">
      <h3>Update CrmLine</h3>
      <form onSubmit={handleSubmit(handleUpdate)}>
        <div>
          <label htmlFor="contrat">Contrat:</label>
          <input 
            type="text" 
            id="contrat" 
            name="contrat"
            defaultValue={item.contrat}
            {...register('contrat', { required: 'ceci est obligatoire'})}
           />
        </div>
        <div>
          <label 
          htmlFor="statut">Statut:</label>
          <Controller
                        name="statut"
                        control={control}
                        defaultValue={item.statut}
                        render={({ field }) => (
                        <select {...field} >
                                <option value="conclue">Conclue</option>
                                <option value="Nouveau">Nouveau</option>
                                <option value="perdu">Perdu</option>
                                <option value="proposition">Proposition</option>
                                <option value="decouverte">Découverte</option>
                                <option value="negotiation">Négociation</option>
                        </select>
                        )}
                    />
        </div>
        <div>
          <label htmlFor="valeur">Valeur:</label>
          <input 
            type="text" 
            id="valeur" 
            name="valeur" 
            defaultValue={item.valeur}
            {...register('valeur', { required: 'ceci est obligatoire'})}
          
           />
        </div>
        <div>
          <label htmlFor="user">Nom:</label>
          <input 
            type="text" 
            id="user" 
            name="user" 
            list="userList"
            defaultValue={item.userID} 

            {...register('user', { required: 'ceci est obligatoire'})}
          
           />
          <datalist id="userList">
            <option value="John Doe" />
            <option value="Jane Smith" />
            <option value="Robert Johnson" />
            <option value="Sarah Williams" />
          </datalist>
        </div>
        <button type="submit">Update CrmLine</button>
      </form>
      <Link to="/crm-HomePage">
        <button>Back</button>
      </Link>
    </div>
  );
}
