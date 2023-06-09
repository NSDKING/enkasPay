/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
      id
      price
      userID
      date
      productID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        price
        userID
        date
        productID
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
export const syncOrders = /* GraphQL */ `
  query SyncOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncOrders(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        price
        userID
        date
        productID
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
export const ordersByUserID = /* GraphQL */ `
  query OrdersByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ordersByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        price
        userID
        date
        productID
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
export const ordersByProductID = /* GraphQL */ `
  query OrdersByProductID(
    $productID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ordersByProductID(
      productID: $productID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        price
        userID
        date
        productID
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
export const getOneYear = /* GraphQL */ `
  query GetOneYear($id: ID!) {
    getOneYear(id: $id) {
      id
      name
      price
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listOneYears = /* GraphQL */ `
  query ListOneYears(
    $filter: ModelOneYearFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOneYears(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        price
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
export const syncOneYears = /* GraphQL */ `
  query SyncOneYears(
    $filter: ModelOneYearFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncOneYears(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        price
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
export const getThreeMonth = /* GraphQL */ `
  query GetThreeMonth($id: ID!) {
    getThreeMonth(id: $id) {
      id
      name
      price
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listThreeMonths = /* GraphQL */ `
  query ListThreeMonths(
    $filter: ModelThreeMonthFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listThreeMonths(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        price
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
export const syncThreeMonths = /* GraphQL */ `
  query SyncThreeMonths(
    $filter: ModelThreeMonthFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncThreeMonths(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        price
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
export const getOneMonth = /* GraphQL */ `
  query GetOneMonth($id: ID!) {
    getOneMonth(id: $id) {
      id
      name
      price
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listOneMonths = /* GraphQL */ `
  query ListOneMonths(
    $filter: ModelOneMonthFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOneMonths(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        price
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
export const syncOneMonths = /* GraphQL */ `
  query SyncOneMonths(
    $filter: ModelOneMonthFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncOneMonths(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        price
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
export const getCart = /* GraphQL */ `
  query GetCart($id: ID!) {
    getCart(id: $id) {
      id
      number
      productID
      userID
      price
      nb_month
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listCarts = /* GraphQL */ `
  query ListCarts(
    $filter: ModelCartFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCarts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        number
        productID
        userID
        price
        nb_month
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
export const syncCarts = /* GraphQL */ `
  query SyncCarts(
    $filter: ModelCartFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCarts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        number
        productID
        userID
        price
        nb_month
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
export const cartsByProductID = /* GraphQL */ `
  query CartsByProductID(
    $productID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCartFilterInput
    $limit: Int
    $nextToken: String
  ) {
    cartsByProductID(
      productID: $productID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        number
        productID
        userID
        price
        nb_month
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
export const cartsByUserID = /* GraphQL */ `
  query CartsByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCartFilterInput
    $limit: Int
    $nextToken: String
  ) {
    cartsByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        number
        productID
        userID
        price
        nb_month
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
      buycount
      cartCount
      Carts {
        nextToken
        startedAt
      }
      OneMonth {
        id
        name
        price
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      ThreeMonth {
        id
        name
        price
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      OneYear {
        id
        name
        price
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      slug
      Orders {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      productOneMonthId
      productThreeMonthId
      productOneYearId
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
        cartCount
        slug
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        productOneMonthId
        productThreeMonthId
        productOneYearId
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
        cartCount
        slug
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        productOneMonthId
        productThreeMonthId
        productOneYearId
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
      userID
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
        endDateProfil
        pin
        free
        service
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
        endDateProfil
        pin
        free
        service
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
      phoneNumber
      Carts {
        nextToken
        startedAt
      }
      Account {
        nextToken
        startedAt
      }
      Orders {
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
        phoneNumber
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
        phoneNumber
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
