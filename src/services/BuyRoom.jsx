import { API, graphqlOperation, Auth } from "aws-amplify";
 
export const getCommonBuyRoomWithUser = async (userID) => {
  const authUser = await Auth.currentAuthenticatedUser();

  // get all chat room of user1
  const response = await API.graphql(
    graphqlOperation(listBuyRooms, { id: authUser.attributes.sub })
  );

  
  const buyRooms = response.data?.getUser?.Roomsubjects?.items || [];
  const buyRoom = buyRooms.find((buyRoomItem) => {
    return (
      buyRoomItem.buyRoom.users.items.length === 2 &&
      buyRoomItem.buyRoom.users.items.some(
        (userItem) => userItem.user.id === userID
      )
    );
  });

  return buyRoom;
};

export const listBuyRooms = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
        id
        BuyRooms {
          items {
            buyRoom {
              id
              users {
                items {
                  user {
                    id
                  }
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

  