/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
      cartCount
      OrderRooms {
        nextToken
        startedAt
      }
      CartRooms {
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
        cartCount
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
export const getOrderRoom = /* GraphQL */ `
  query GetOrderRoom($id: ID!) {
    getOrderRoom(id: $id) {
      id
      userID
      products {
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
export const listOrderRooms = /* GraphQL */ `
  query ListOrderRooms(
    $filter: ModelOrderRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrderRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
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
export const syncOrderRooms = /* GraphQL */ `
  query SyncOrderRooms(
    $filter: ModelOrderRoomFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncOrderRooms(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        userID
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
export const orderRoomsByUserID = /* GraphQL */ `
  query OrderRoomsByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelOrderRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    orderRoomsByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userID
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
export const getCartRoom = /* GraphQL */ `
  query GetCartRoom($id: ID!) {
    getCartRoom(id: $id) {
      id
      number
      userID
      products {
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
export const listCartRooms = /* GraphQL */ `
  query ListCartRooms(
    $filter: ModelCartRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCartRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        number
        userID
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
export const syncCartRooms = /* GraphQL */ `
  query SyncCartRooms(
    $filter: ModelCartRoomFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCartRooms(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        number
        userID
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
export const cartRoomsByUserID = /* GraphQL */ `
  query CartRoomsByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCartRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    cartRoomsByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        number
        userID
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
export const getAccount = /* GraphQL */ `
  query GetAccount($id: ID!) {
    getAccount(id: $id) {
      id
      mail
      passe
      profil
      endDateAccount
      endDateProfil
      pin
      free
      service
      User {
        id
        FamilyName
        LastName
        city
        mail
        birthdate
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
      accountUserId
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
        endDateProfil
        pin
        free
        service
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        accountUserId
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
        endDateProfil
        pin
        free
        service
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        accountUserId
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
      city
      mail
      birthdate
      staff
      CartRooms {
        nextToken
        startedAt
      }
      OrderRooms {
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
        city
        mail
        birthdate
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
        city
        mail
        birthdate
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
export const getProductOrderRoom = /* GraphQL */ `
  query GetProductOrderRoom($id: ID!) {
    getProductOrderRoom(id: $id) {
      id
      productId
      orderRoomId
      product {
        id
        name
        image
        type
        buycount
        cartCount
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      orderRoom {
        id
        userID
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
export const listProductOrderRooms = /* GraphQL */ `
  query ListProductOrderRooms(
    $filter: ModelProductOrderRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProductOrderRooms(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        productId
        orderRoomId
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
export const syncProductOrderRooms = /* GraphQL */ `
  query SyncProductOrderRooms(
    $filter: ModelProductOrderRoomFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProductOrderRooms(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        productId
        orderRoomId
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
export const productOrderRoomsByProductId = /* GraphQL */ `
  query ProductOrderRoomsByProductId(
    $productId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProductOrderRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    productOrderRoomsByProductId(
      productId: $productId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        productId
        orderRoomId
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
export const productOrderRoomsByOrderRoomId = /* GraphQL */ `
  query ProductOrderRoomsByOrderRoomId(
    $orderRoomId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProductOrderRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    productOrderRoomsByOrderRoomId(
      orderRoomId: $orderRoomId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        productId
        orderRoomId
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
export const getProductCartRoom = /* GraphQL */ `
  query GetProductCartRoom($id: ID!) {
    getProductCartRoom(id: $id) {
      id
      productId
      cartRoomId
      product {
        id
        name
        image
        type
        buycount
        cartCount
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      cartRoom {
        id
        number
        userID
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
export const listProductCartRooms = /* GraphQL */ `
  query ListProductCartRooms(
    $filter: ModelProductCartRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProductCartRooms(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        productId
        cartRoomId
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
export const syncProductCartRooms = /* GraphQL */ `
  query SyncProductCartRooms(
    $filter: ModelProductCartRoomFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProductCartRooms(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        productId
        cartRoomId
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
export const productCartRoomsByProductId = /* GraphQL */ `
  query ProductCartRoomsByProductId(
    $productId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProductCartRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    productCartRoomsByProductId(
      productId: $productId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        productId
        cartRoomId
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
export const productCartRoomsByCartRoomId = /* GraphQL */ `
  query ProductCartRoomsByCartRoomId(
    $cartRoomId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProductCartRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    productCartRoomsByCartRoomId(
      cartRoomId: $cartRoomId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        productId
        cartRoomId
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
