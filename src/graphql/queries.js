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
      userID
      numero
      endDateProfil
      _version
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
        userID
        numero
        endDateProfil
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
        userID
        numero
        endDateProfil
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
        userID
        numero
        endDateProfil
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
      buyby {
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
      likeby {
        nextToken
        startedAt
      }
      productLike {
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
      likerooms {
        nextToken
        startedAt
      }
      buyrooms {
        nextToken
        startedAt
      }
      Accounts {
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
export const getBuyRoomUser = /* GraphQL */ `
  query GetBuyRoomUser($id: ID!) {
    getBuyRoomUser(id: $id) {
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
export const listBuyRoomUsers = /* GraphQL */ `
  query ListBuyRoomUsers(
    $filter: ModelBuyRoomUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBuyRoomUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
export const syncBuyRoomUsers = /* GraphQL */ `
  query SyncBuyRoomUsers(
    $filter: ModelBuyRoomUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBuyRoomUsers(
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
export const buyRoomUsersByBuyRoomId = /* GraphQL */ `
  query BuyRoomUsersByBuyRoomId(
    $buyRoomId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelBuyRoomUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    buyRoomUsersByBuyRoomId(
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
export const buyRoomUsersByUserId = /* GraphQL */ `
  query BuyRoomUsersByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelBuyRoomUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    buyRoomUsersByUserId(
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
export const getLikeRoomUser = /* GraphQL */ `
  query GetLikeRoomUser($id: ID!) {
    getLikeRoomUser(id: $id) {
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
export const listLikeRoomUsers = /* GraphQL */ `
  query ListLikeRoomUsers(
    $filter: ModelLikeRoomUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLikeRoomUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
export const syncLikeRoomUsers = /* GraphQL */ `
  query SyncLikeRoomUsers(
    $filter: ModelLikeRoomUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLikeRoomUsers(
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
export const likeRoomUsersByLikeRoomId = /* GraphQL */ `
  query LikeRoomUsersByLikeRoomId(
    $likeRoomId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelLikeRoomUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    likeRoomUsersByLikeRoomId(
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
export const likeRoomUsersByUserId = /* GraphQL */ `
  query LikeRoomUsersByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelLikeRoomUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    likeRoomUsersByUserId(
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
