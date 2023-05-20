import { API, graphqlOperation, Auth } from "aws-amplify";

export const getCommonCartRoomWithUser = async (prodId) => {
    const authUser = await Auth.currentAuthenticatedUser();
    const response = await API.graphql(
        graphqlOperation(listCartRooms, { id: authUser.attributes.sub })
      );
 
    const cartRooms = response.data?.getUser?.Carts?.items || [];
    const cartRoom = cartRooms.find((cartRoomItem) => {
        return (
            cartRoomItem.productID   == prodId
          )
      });

    return(cartRoom)

}








export const listCartRooms = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
        id
        Carts {
            items {
              id
              number
              _version
              _deleted
              productID
              userID
              price
              nb_month
            }
          }   
    }
  }
`;
 