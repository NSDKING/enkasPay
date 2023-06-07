import { createProduct } from "../graphql/mutations";


export default function Price() {
  return(
    <button onClick={async()=>{
      
    }}>

    </button>
  )

}



export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        name
        image
        id
        price {
          one_month
          one_year
          three_month
        }
        type
        cartCount
        buycount
        _deleted
        _version
      }
    }
  }
`;