import { API, graphqlOperation, Auth } from "aws-amplify";
 
export const dd = async (prodId) => {
  const authUser = await Auth.currentAuthenticatedUser();

  // get all chat room of user1
  const response = await API.graphql(
    graphqlOperation(listCartRooms, { id: authUser.attributes.sub })
  );

  
  const cartRooms = response.data?.getUser?.cartRooms?.items || [];
  console.log(cartRooms)
  ;

 };

export const listCartRooms = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
        id
        CartRooms {
          items {
            id
            number
            products {
              items {
                product {
                  id
                }
              }
            }
          }
        }
    }
  }
`;
 

/**
 * 
 * 
  const subjectRooms = response.data?.getUser?.Roomsubjects?.items || [];

  const subjectRoom = subjectRooms.find((subjectRoomItem) => {
    return (
      subjectRoomItem.subjectRoom.users.items.length === 2 &&
      subjectRoomItem.subjectRoom.users.items.some(
        (userItem) => userItem.user.id === userID
      )
    );
  });

  return subjectRooms;
 */

  