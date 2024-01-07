import "./index.css";
import { useState, useEffect } from "react";
import StafNavbar from "../../components/StafNavbar";
import { API, graphqlOperation } from 'aws-amplify';
import { useLocation, useNavigate } from "react-router-dom";
import { updateProduct } from "../../graphql/mutations";

export default function ChangePriceDef() {
  const { state } = useLocation();
  const { service } = state;
  const [loading, setLoading] = useState(false);
  const [prices, setPrices] = useState({
    oneMonth: "",
    threeMonths: "",
    oneYear: ""
  });
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPrices({
      ...prices,
      [name]: value
    });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (loading) {
      return;
    }

    setLoading(true);

    try {
      const response = await API.graphql(graphqlOperation(updateProduct, {
        input: {
          name: service, // Assuming "service" is the product name
          OneMonth: {
            
            price: parseFloat(prices.oneMonth)
          },
          ThreeMonth: {
            price: parseFloat(prices.threeMonths)
          },
          OneYear: {
            price: parseFloat(prices.oneYear)
          }
        }
      }));

      console.log(response);

     

    } catch (e) {
      console.error(e);
    }

    setLoading(false);
  }

  useEffect(() => {
    // Fetch the current prices and set them as default values in the form
    async function fetchData() {
      if (loading) {
        return;
      }
      setLoading(true);
      try {
        const response = await API.graphql(graphqlOperation(listProducts));
        const matchedItems = response.data.listProducts.items.find(item => item.name.toLowerCase() === service);
        if (matchedItems) {
          setPrices({
            oneMonth: matchedItems.OneMonth?.price.toString(),
            threeMonths: matchedItems.ThreeMonth?.price.toString(),
            oneYear: matchedItems.OneYear?.price.toString()
          });
        }
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    }
    fetchData();
  }, [service, loading]);

  return (
    <div>
      <StafNavbar></StafNavbar>
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="oneMonth">Price for 1 Month:</label>
            <input
              type="number"
              id="oneMonth"
              name="oneMonth"
              value={prices.oneMonth}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="threeMonths">Price for 3 Months:</label>
            <input
              type="number"
              id="threeMonths"
              name="threeMonths"
              value={prices.threeMonths}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="oneYear">Price for 1 Year:</label>
            <input
              type="number"
              id="oneYear"
              name="oneYear"
              value={prices.oneYear}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

// Rest of your code remains the same




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