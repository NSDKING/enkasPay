import { API, graphqlOperation, Auth } from "aws-amplify";
 
export const getCommonLikeRoomWithUser = async (prodId) => {
  const authUser = await Auth.currentAuthenticatedUser();

  // get all chat room of user1
  const response = await API.graphql(
    graphqlOperation(listLikeRooms, { id: authUser.attributes.sub })
  );

  
  const likeRooms = response.data?.getUser?.Roomsubjects?.items || [];
  const likeRoom = likeRooms.find((likeRoomItem) => {
    return (
      likeRoomItem.likeRoom.users.items.length === 2 &&
      likeRoomItem.likeRoom.users.items.some(
        (userItem) => userItem.user.id === prodId
      )
    );
  });

  return likeRoom;
};

export const listLikeRooms = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
        id
        LikeRooms {
          items {
            likeRoom {
              id
              number
              _version
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

  