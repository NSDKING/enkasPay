/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
      price {
        one_month
        three_month
        one_year
      }
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct($filter: ModelSubscriptionProductFilterInput) {
    onUpdateProduct(filter: $filter) {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct($filter: ModelSubscriptionProductFilterInput) {
    onDeleteProduct(filter: $filter) {
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
      }
      Account {
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
      }
      Account {
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
      }
      Account {
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
