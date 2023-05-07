/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAccount = /* GraphQL */ `
  query GetAccount($id: ID!) {
    getAccount(id: $id) {
      id
      mail
      passe
      profil
      endDateAccount
      pin
      endDateProfil
      userID
      free
      service
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listAccounts = /* GraphQL */ `
  query ListAccounts(
    $filter: ModelAccountFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAccounts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        mail
        passe
        profil
        endDateAccount
        pin
        endDateProfil
        userID
        free
        service
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncAccounts = /* GraphQL */ `
  query SyncAccounts(
    $filter: ModelAccountFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAccounts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        mail
        passe
        profil
        endDateAccount
        pin
        endDateProfil
        userID
        free
        service
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const accountsByUserID = /* GraphQL */ `
  query AccountsByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAccountFilterInput
    $limit: Int
    $nextToken: String
  ) {
    accountsByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        mail
        passe
        profil
        endDateAccount
        pin
        endDateProfil
        userID
        free
        service
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getBuyRoom = /* GraphQL */ `
  query GetBuyRoom($id: ID!) {
    getBuyRoom(id: $id) {
      id
      productbuy {
        nextToken
        startedAt
      }
      users {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listBuyRooms = /* GraphQL */ `
  query ListBuyRooms(
    $filter: ModelBuyRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBuyRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncBuyRooms = /* GraphQL */ `
  query SyncBuyRooms(
    $filter: ModelBuyRoomFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBuyRooms(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getLikeRoom = /* GraphQL */ `
  query GetLikeRoom($id: ID!) {
    getLikeRoom(id: $id) {
      id
      productLike {
        nextToken
        startedAt
      }
      users {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listLikeRooms = /* GraphQL */ `
  query ListLikeRooms(
    $filter: ModelLikeRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLikeRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncLikeRooms = /* GraphQL */ `
  query SyncLikeRooms(
    $filter: ModelLikeRoomFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLikeRooms(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
      id
      name
      image
      type
      price {
        one_month
        three_month
        one_year
      }
      buycount
      likecount
      likeroomID
      buyroomID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        buycount
        buyroomID
        id
        image
        likecount
        likeroomID
        name
        type
        price {
          one_month
          three_month
          one_year
        }
      }
    }
  }
`;
export const syncProducts = /* GraphQL */ `
  query SyncProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProducts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        image
        type
        buycount
        likecount
        likeroomID
        buyroomID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const productsByLikeroomID = /* GraphQL */ `
  query ProductsByLikeroomID(
    $likeroomID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    productsByLikeroomID(
      likeroomID: $likeroomID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        image
        type
        buycount
        likecount
        likeroomID
        buyroomID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const productsByBuyroomID = /* GraphQL */ `
  query ProductsByBuyroomID(
    $buyroomID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    productsByBuyroomID(
      buyroomID: $buyroomID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        image
        type
        buycount
        likecount
        likeroomID
        buyroomID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      FamilyName
      LastName
      phoneNumber
      city
      mail
      Accounts {
        nextToken
        startedAt
      }
      BuyRooms {
        nextToken
        startedAt
      }
      LikeRooms {
        nextToken
        startedAt
      }
      staff
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        FamilyName
        LastName
        phoneNumber
        city
        mail
        staff
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        FamilyName
        LastName
        phoneNumber
        city
        mail
        staff
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getUserBuyRoom = /* GraphQL */ `
  query GetUserBuyRoom($id: ID!) {
    getUserBuyRoom(id: $id) {
      id
      buyRoomId
      userId
      buyRoom {
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      user {
        id
        FamilyName
        LastName
        phoneNumber
        city
        mail
        staff
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listUserBuyRooms = /* GraphQL */ `
  query ListUserBuyRooms(
    $filter: ModelUserBuyRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserBuyRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        buyRoomId
        userId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUserBuyRooms = /* GraphQL */ `
  query SyncUserBuyRooms(
    $filter: ModelUserBuyRoomFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserBuyRooms(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        buyRoomId
        userId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const userBuyRoomsByBuyRoomId = /* GraphQL */ `
  query UserBuyRoomsByBuyRoomId(
    $buyRoomId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserBuyRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userBuyRoomsByBuyRoomId(
      buyRoomId: $buyRoomId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        buyRoomId
        userId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const userBuyRoomsByUserId = /* GraphQL */ `
  query UserBuyRoomsByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserBuyRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userBuyRoomsByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        buyRoomId
        userId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getUserLikeRoom = /* GraphQL */ `
  query GetUserLikeRoom($id: ID!) {
    getUserLikeRoom(id: $id) {
      id
      likeRoomId
      userId
      likeRoom {
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      user {
        id
        FamilyName
        LastName
        phoneNumber
        city
        mail
        staff
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listUserLikeRooms = /* GraphQL */ `
  query ListUserLikeRooms(
    $filter: ModelUserLikeRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserLikeRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        likeRoomId
        userId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUserLikeRooms = /* GraphQL */ `
  query SyncUserLikeRooms(
    $filter: ModelUserLikeRoomFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserLikeRooms(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        likeRoomId
        userId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const userLikeRoomsByLikeRoomId = /* GraphQL */ `
  query UserLikeRoomsByLikeRoomId(
    $likeRoomId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserLikeRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userLikeRoomsByLikeRoomId(
      likeRoomId: $likeRoomId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        likeRoomId
        userId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const userLikeRoomsByUserId = /* GraphQL */ `
  query UserLikeRoomsByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserLikeRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userLikeRoomsByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        likeRoomId
        userId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
