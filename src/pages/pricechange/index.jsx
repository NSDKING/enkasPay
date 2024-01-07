import "./index.css";
import { useState, useEffect } from "react";
import StafNavbar from "../../components/StafNavbar";
import { API, graphqlOperation } from 'aws-amplify';
import { useNavigate, useLocation } from "react-router-dom";
import { updateOneMonth, updateOneYear, updateThreeMonth } from "../../graphql/mutations";

export default function ChangePrice() {
  const { state } = useLocation();
  const { service } = state;
  const [loading, setLoading] = useState(false);
  const [editMode, setEditMode] = useState({ rowId: null, colName: null });
  const [specArticle, setSpecArticle] = useState([]);
  const navigate = useNavigate();

  const handleClickOneMonth = async (id, version, price) => {
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      const input = {
        id: id,
        price: price,
        _version: version,
      };
      setEditMode({ rowId: id, colName: "OneMonth.price" });
      const response = await API.graphql(graphqlOperation(updateOneMonth, { input: input }));
      console.log(response);
      alert('prix changé')
      setEditMode({ rowId: null, colName: null });
      window.location.reload();

    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  }


  const handleClickThreeMonth = async (id, version, price) => {
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      const input = {
        id: id,
        price: price,
        _version: version,
      };
      setEditMode({ rowId: id, colName: "ThreeMonth.price" });
      const response = await API.graphql(graphqlOperation(updateThreeMonth, { input: input }));
      console.log(response);
      alert('prix changé')
      window.location.reload();

      setEditMode({ rowId: null, colName: null });
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  }

  const handleClickOneYear = async (id, version, price) => {
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      const input = {
        id: id,
        price: price,
        _version: version,
      };
      setEditMode({ rowId: id, colName: "OneYear.price" });
      const response = await API.graphql(graphqlOperation(updateOneYear, { input: input }));
      console.log(response);
      setEditMode({ rowId: null, colName: null });
      alert('prix changé')
      window.location.reload();

    } catch (e) {
      console.error("Update failed:", e.message);
    }
    setLoading(false);
  }

  
  // Similar functions for handleClickThreeMonth and handleClickOneYear

  const getProduct = async () => {
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      const response = await API.graphql(graphqlOperation(listProducts));
      const matchedItems = response.data.listProducts.items.filter(item => item.name.toLowerCase().includes(service));
      setSpecArticle(matchedItems);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  }

  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div>
      <StafNavbar></StafNavbar>
      <div className="tableContainer">
        <table>
          <thead>
            <tr>
              <th>produit</th>
              <th>prix 1 mois</th>
              <th>prix 3 mois</th>
              <th>prix 1 an</th>
              </tr>
          </thead>
          <tbody>
            {loading ? (
              <h2>Loading...</h2>
            ) : (
              specArticle?.map(item => (
                <tr key={item.id} >
                  <td className="std" >{item.name}</td>
                  <td className="std"  onDoubleClick={() => setEditMode({ rowId: item.OneMonth.id, colName: "OneMonth.price" })}>
                    {editMode.rowId === item.OneMonth.id && editMode.colName === "OneMonth.price" ? (
                      <input
                        className='input-click'
                        type='number'
                        onBlur={(e) => handleClickOneMonth(item.OneMonth.id, item.OneMonth._version, e.target.value)}
                        defaultValue={item.OneMonth?.price}
                      />
                    ) : (
                      <h3>{item.OneMonth?.price}</h3>
                    )}
                  </td>

                  <td className="std" onDoubleClick={() => setEditMode({ rowId: item.ThreeMonth.id, colName: "ThreeMonth.price" })}>
                    {editMode.rowId === item.ThreeMonth.id && editMode.colName === "ThreeMonth.price" ? (
                      <input
                        className='form-input'
                        type='number'
                        onBlur={(e) => handleClickThreeMonth(item.ThreeMonth.id, item.ThreeMonth._version, e.target.value)}
                        defaultValue={item.ThreeMonth?.price}
                      />
                    ) : (
                      <h3>{item.ThreeMonth?.price}</h3>
                    )}
                  </td>
                  <td className="std" onDoubleClick={() => setEditMode({ rowId: item.OneYear.id, colName: "oneYear.price" })}>
                    {editMode.rowId === item.OneYear.id && editMode.colName === "oneYear.price" ? (
                      <input
                        className='form-input'
                        type='number'
                        onBlur={(e) => handleClickOneYear(item.OneYear.id, item.OneYear._version, e.target.value)}
                        defaultValue={item.OneYear?.price}
                      />
                    ) : (
                      <h3>{item.OneYear?.price}</h3>
                    )}
                  </td>
                 </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}



export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        OneYear {
          id
          price
          _version
        }
        OneMonth {
          id
          price
          _version
        }
        ThreeMonth {
          id
          price
          _version
        }
        buycount
        cartCount
        image
        name
        id
        slug
        type
      }
      nextToken
      startedAt
    }
  }
`;