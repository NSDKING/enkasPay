import { API, graphqlOperation, Auth } from "aws-amplify";
import { listLikeRooms } from "../graphql/queries";

export const getCommonLikeRoomWithUser = async (userID) => {
  const authUser = await Auth.currentAuthenticatedUser();

  // get all chat room of user1
  const response = await API.graphql(
    graphqlOperation(listLikeRooms, { id: authUser.attributes.sub })
  );

  
  const likeRooms = response.data?.getUser?.Roomsubjects?.items || [];
  const likeRoom = likeRooms.find((likeRoomItem) => {
    return (
      likeRoomItem.roomsubject.users.items.length === 2 &&
      likeRoomItem.roomsubject.users.items.some(
        (userItem) => userItem.user.id === userID
      )
    );
  });

  return likeRoom;
};

export const listSubjectRoom = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
        id
        Roomsubjects {
          items {
            roomsubject {
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

  