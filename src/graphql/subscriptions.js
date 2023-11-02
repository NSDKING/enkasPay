/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePayments = /* GraphQL */ `
  subscription OnCreatePayments($filter: ModelSubscriptionPaymentsFilterInput) {
    onCreatePayments(filter: $filter) {
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
export const onUpdatePayments = /* GraphQL */ `
  subscription OnUpdatePayments($filter: ModelSubscriptionPaymentsFilterInput) {
    onUpdatePayments(filter: $filter) {
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
export const onDeletePayments = /* GraphQL */ `
  subscription OnDeletePayments($filter: ModelSubscriptionPaymentsFilterInput) {
    onDeletePayments(filter: $filter) {
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
export const onCreateDescription = /* GraphQL */ `
  subscription OnCreateDescription(
    $filter: ModelSubscriptionDescriptionFilterInput
  ) {
    onCreateDescription(filter: $filter) {
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
export const onUpdateDescription = /* GraphQL */ `
  subscription OnUpdateDescription(
    $filter: ModelSubscriptionDescriptionFilterInput
  ) {
    onUpdateDescription(filter: $filter) {
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
export const onDeleteDescription = /* GraphQL */ `
  subscription OnDeleteDescription(
    $filter: ModelSubscriptionDescriptionFilterInput
  ) {
    onDeleteDescription(filter: $filter) {
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
export const onCreateProspect = /* GraphQL */ `
  subscription OnCreateProspect($filter: ModelSubscriptionProspectFilterInput) {
    onCreateProspect(filter: $filter) {
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
export const onUpdateProspect = /* GraphQL */ `
  subscription OnUpdateProspect($filter: ModelSubscriptionProspectFilterInput) {
    onUpdateProspect(filter: $filter) {
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
export const onDeleteProspect = /* GraphQL */ `
  subscription OnDeleteProspect($filter: ModelSubscriptionProspectFilterInput) {
    onDeleteProspect(filter: $filter) {
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
export const onCreateAffiliationContact = /* GraphQL */ `
  subscription OnCreateAffiliationContact(
    $filter: ModelSubscriptionAffiliationContactFilterInput
  ) {
    onCreateAffiliationContact(filter: $filter) {
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
export const onUpdateAffiliationContact = /* GraphQL */ `
  subscription OnUpdateAffiliationContact(
    $filter: ModelSubscriptionAffiliationContactFilterInput
  ) {
    onUpdateAffiliationContact(filter: $filter) {
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
export const onDeleteAffiliationContact = /* GraphQL */ `
  subscription OnDeleteAffiliationContact(
    $filter: ModelSubscriptionAffiliationContactFilterInput
  ) {
    onDeleteAffiliationContact(filter: $filter) {
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
export const onCreateAffiliation = /* GraphQL */ `
  subscription OnCreateAffiliation(
    $filter: ModelSubscriptionAffiliationFilterInput
  ) {
    onCreateAffiliation(filter: $filter) {
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
export const onUpdateAffiliation = /* GraphQL */ `
  subscription OnUpdateAffiliation(
    $filter: ModelSubscriptionAffiliationFilterInput
  ) {
    onUpdateAffiliation(filter: $filter) {
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
export const onDeleteAffiliation = /* GraphQL */ `
  subscription OnDeleteAffiliation(
    $filter: ModelSubscriptionAffiliationFilterInput
  ) {
    onDeleteAffiliation(filter: $filter) {
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
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder($filter: ModelSubscriptionOrderFilterInput) {
    onCreateOrder(filter: $filter) {
      id
      price
      userID
      productID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder($filter: ModelSubscriptionOrderFilterInput) {
    onUpdateOrder(filter: $filter) {
      id
      price
      userID
      productID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder($filter: ModelSubscriptionOrderFilterInput) {
    onDeleteOrder(filter: $filter) {
      id
      price
      userID
      productID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateOneYear = /* GraphQL */ `
  subscription OnCreateOneYear($filter: ModelSubscriptionOneYearFilterInput) {
    onCreateOneYear(filter: $filter) {
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
export const onUpdateOneYear = /* GraphQL */ `
  subscription OnUpdateOneYear($filter: ModelSubscriptionOneYearFilterInput) {
    onUpdateOneYear(filter: $filter) {
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
export const onDeleteOneYear = /* GraphQL */ `
  subscription OnDeleteOneYear($filter: ModelSubscriptionOneYearFilterInput) {
    onDeleteOneYear(filter: $filter) {
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
export const onCreateThreeMonth = /* GraphQL */ `
  subscription OnCreateThreeMonth(
    $filter: ModelSubscriptionThreeMonthFilterInput
  ) {
    onCreateThreeMonth(filter: $filter) {
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
export const onUpdateThreeMonth = /* GraphQL */ `
  subscription OnUpdateThreeMonth(
    $filter: ModelSubscriptionThreeMonthFilterInput
  ) {
    onUpdateThreeMonth(filter: $filter) {
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
export const onDeleteThreeMonth = /* GraphQL */ `
  subscription OnDeleteThreeMonth(
    $filter: ModelSubscriptionThreeMonthFilterInput
  ) {
    onDeleteThreeMonth(filter: $filter) {
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
export const onCreateOneMonth = /* GraphQL */ `
  subscription OnCreateOneMonth($filter: ModelSubscriptionOneMonthFilterInput) {
    onCreateOneMonth(filter: $filter) {
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
export const onUpdateOneMonth = /* GraphQL */ `
  subscription OnUpdateOneMonth($filter: ModelSubscriptionOneMonthFilterInput) {
    onUpdateOneMonth(filter: $filter) {
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
export const onDeleteOneMonth = /* GraphQL */ `
  subscription OnDeleteOneMonth($filter: ModelSubscriptionOneMonthFilterInput) {
    onDeleteOneMonth(filter: $filter) {
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
export const onCreateCart = /* GraphQL */ `
  subscription OnCreateCart($filter: ModelSubscriptionCartFilterInput) {
    onCreateCart(filter: $filter) {
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
export const onUpdateCart = /* GraphQL */ `
  subscription OnUpdateCart($filter: ModelSubscriptionCartFilterInput) {
    onUpdateCart(filter: $filter) {
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
export const onDeleteCart = /* GraphQL */ `
  subscription OnDeleteCart($filter: ModelSubscriptionCartFilterInput) {
    onDeleteCart(filter: $filter) {
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
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct($filter: ModelSubscriptionProductFilterInput) {
    onCreateProduct(filter: $filter) {
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct($filter: ModelSubscriptionProductFilterInput) {
    onUpdateProduct(filter: $filter) {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct($filter: ModelSubscriptionProductFilterInput) {
    onDeleteProduct(filter: $filter) {
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
export const onCreateAccount = /* GraphQL */ `
  subscription OnCreateAccount($filter: ModelSubscriptionAccountFilterInput) {
    onCreateAccount(filter: $filter) {
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
export const onUpdateAccount = /* GraphQL */ `
  subscription OnUpdateAccount($filter: ModelSubscriptionAccountFilterInput) {
    onUpdateAccount(filter: $filter) {
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
export const onDeleteAccount = /* GraphQL */ `
  subscription OnDeleteAccount($filter: ModelSubscriptionAccountFilterInput) {
    onDeleteAccount(filter: $filter) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
