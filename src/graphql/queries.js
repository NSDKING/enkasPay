/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSitchi = /* GraphQL */ `
  query GetSitchi($id: ID!) {
    getSitchi(id: $id) {
      id
      Nom
      Prenom
      numero
      cite
      precommender
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listSitchis = /* GraphQL */ `
  query ListSitchis(
    $filter: ModelSitchiFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSitchis(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Nom
        Prenom
        numero
        cite
        precommender
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncSitchis = /* GraphQL */ `
  query SyncSitchis(
    $filter: ModelSitchiFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSitchis(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        Nom
        Prenom
        numero
        cite
        precommender
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getBilan = /* GraphQL */ `
  query GetBilan($id: ID!) {
    getBilan(id: $id) {
      id
      ca
      expense
      solde
      date
      ActiveCustomer
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listBilans = /* GraphQL */ `
  query ListBilans(
    $filter: ModelBilanFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBilans(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        ca
        expense
        solde
        date
        ActiveCustomer
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncBilans = /* GraphQL */ `
  query SyncBilans(
    $filter: ModelBilanFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBilans(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        ca
        expense
        solde
        date
        ActiveCustomer
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getCompta = /* GraphQL */ `
  query GetCompta($id: ID!) {
    getCompta(id: $id) {
      id
      title
      amount
      type
      userID
      date
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listComptas = /* GraphQL */ `
  query ListComptas(
    $filter: ModelComptaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComptas(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        amount
        type
        userID
        date
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncComptas = /* GraphQL */ `
  query SyncComptas(
    $filter: ModelComptaFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncComptas(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        amount
        type
        userID
        date
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const comptasByUserID = /* GraphQL */ `
  query ComptasByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelComptaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    comptasByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        amount
        type
        userID
        date
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getTransactions = /* GraphQL */ `
  query GetTransactions($id: ID!) {
    getTransactions(id: $id) {
      id
      amount
      advance
      full
      userID
      orderID
      date
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listTransactions = /* GraphQL */ `
  query ListTransactions(
    $filter: ModelTransactionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTransactions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        amount
        advance
        full
        userID
        orderID
        date
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncTransactions = /* GraphQL */ `
  query SyncTransactions(
    $filter: ModelTransactionsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTransactions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        amount
        advance
        full
        userID
        orderID
        date
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const transactionsByUserID = /* GraphQL */ `
  query TransactionsByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTransactionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    transactionsByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        amount
        advance
        full
        userID
        orderID
        date
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const transactionsByOrderID = /* GraphQL */ `
  query TransactionsByOrderID(
    $orderID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTransactionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    transactionsByOrderID(
      orderID: $orderID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        amount
        advance
        full
        userID
        orderID
        date
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getPayments = /* GraphQL */ `
  query GetPayments($id: ID!) {
    getPayments(id: $id) {
      id
      amounts
      sender_number
      sender_name
      transaction_id
      messages
      used
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listPayments = /* GraphQL */ `
  query ListPayments(
    $filter: ModelPaymentsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPayments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        amounts
        sender_number
        sender_name
        transaction_id
        messages
        used
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncPayments = /* GraphQL */ `
  query SyncPayments(
    $filter: ModelPaymentsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPayments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        amounts
        sender_number
        sender_name
        transaction_id
        messages
        used
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getDescription = /* GraphQL */ `
  query GetDescription($id: ID!) {
    getDescription(id: $id) {
      id
      text
      title
      userID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listDescriptions = /* GraphQL */ `
  query ListDescriptions(
    $filter: ModelDescriptionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDescriptions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        text
        title
        userID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncDescriptions = /* GraphQL */ `
  query SyncDescriptions(
    $filter: ModelDescriptionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDescriptions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        text
        title
        userID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const descriptionsByUserID = /* GraphQL */ `
  query DescriptionsByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelDescriptionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    descriptionsByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        text
        title
        userID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getProspect = /* GraphQL */ `
  query GetProspect($id: ID!) {
    getProspect(id: $id) {
      id
      contrat
      valeur
      statut
      userID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listProspects = /* GraphQL */ `
  query ListProspects(
    $filter: ModelProspectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProspects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        contrat
        valeur
        statut
        userID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncProspects = /* GraphQL */ `
  query SyncProspects(
    $filter: ModelProspectFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProspects(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        contrat
        valeur
        statut
        userID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const prospectsByUserID = /* GraphQL */ `
  query ProspectsByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProspectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    prospectsByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        contrat
        valeur
        statut
        userID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getAffiliationContact = /* GraphQL */ `
  query GetAffiliationContact($id: ID!) {
    getAffiliationContact(id: $id) {
      id
      affiliationID
      userID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listAffiliationContacts = /* GraphQL */ `
  query ListAffiliationContacts(
    $filter: ModelAffiliationContactFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAffiliationContacts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        affiliationID
        userID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncAffiliationContacts = /* GraphQL */ `
  query SyncAffiliationContacts(
    $filter: ModelAffiliationContactFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAffiliationContacts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        affiliationID
        userID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const affiliationContactsByAffiliationID = /* GraphQL */ `
  query AffiliationContactsByAffiliationID(
    $affiliationID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAffiliationContactFilterInput
    $limit: Int
    $nextToken: String
  ) {
    affiliationContactsByAffiliationID(
      affiliationID: $affiliationID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        affiliationID
        userID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const affiliationContactsByUserID = /* GraphQL */ `
  query AffiliationContactsByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAffiliationContactFilterInput
    $limit: Int
    $nextToken: String
  ) {
    affiliationContactsByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        affiliationID
        userID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getAffiliation = /* GraphQL */ `
  query GetAffiliation($id: ID!) {
    getAffiliation(id: $id) {
      id
      ca
      code
      utilisations
      AffiliationContacts {
        nextToken
        startedAt
        __typename
      }
      userID
      statut
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listAffiliations = /* GraphQL */ `
  query ListAffiliations(
    $filter: ModelAffiliationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAffiliations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        ca
        code
        utilisations
        userID
        statut
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncAffiliations = /* GraphQL */ `
  query SyncAffiliations(
    $filter: ModelAffiliationFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAffiliations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        ca
        code
        utilisations
        userID
        statut
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const affiliationsByUserID = /* GraphQL */ `
  query AffiliationsByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAffiliationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    affiliationsByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        ca
        code
        utilisations
        userID
        statut
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
      id
      price
      userID
      productID
      ProductName
      Transactions {
        nextToken
        startedAt
        __typename
      }
      date
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
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
        productID
        ProductName
        date
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
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
        productID
        ProductName
        date
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
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
        productID
        ProductName
        date
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
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
        productID
        ProductName
        date
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
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
      __typename
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
        __typename
      }
      nextToken
      startedAt
      __typename
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
        __typename
      }
      nextToken
      startedAt
      __typename
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
      __typename
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
        __typename
      }
      nextToken
      startedAt
      __typename
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
        __typename
      }
      nextToken
      startedAt
      __typename
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
      __typename
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
        __typename
      }
      nextToken
      startedAt
      __typename
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
        __typename
      }
      nextToken
      startedAt
      __typename
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
      __typename
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
        __typename
      }
      nextToken
      startedAt
      __typename
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
        __typename
      }
      nextToken
      startedAt
      __typename
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
        __typename
      }
      nextToken
      startedAt
      __typename
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
        __typename
      }
      nextToken
      startedAt
      __typename
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
        __typename
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
        __typename
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
        __typename
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
        __typename
      }
      slug
      Orders {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      productOneMonthId
      productThreeMonthId
      productOneYearId
      __typename
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
        __typename
      }
      nextToken
      startedAt
      __typename
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
        __typename
      }
      nextToken
      startedAt
      __typename
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
      __typename
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
        __typename
      }
      nextToken
      startedAt
      __typename
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
        __typename
      }
      nextToken
      startedAt
      __typename
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
        __typename
      }
      nextToken
      startedAt
      __typename
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
        __typename
      }
      Account {
        nextToken
        startedAt
        __typename
      }
      Orders {
        nextToken
        startedAt
        __typename
      }
      Affiliations {
        nextToken
        startedAt
        __typename
      }
      AffiliationContacts {
        nextToken
        startedAt
        __typename
      }
      statut
      Prospects {
        nextToken
        startedAt
        __typename
      }
      goodcount
      pbcount
      Descriptions {
        nextToken
        startedAt
        __typename
      }
      solde
      Transactions {
        nextToken
        startedAt
        __typename
      }
      Comptas {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
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
        statut
        goodcount
        pbcount
        solde
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
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
        statut
        goodcount
        pbcount
        solde
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
