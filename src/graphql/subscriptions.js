/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
export const onCreateOrderRoom = /* GraphQL */ `
  subscription OnCreateOrderRoom(
    $filter: ModelSubscriptionOrderRoomFilterInput
  ) {
    onCreateOrderRoom(filter: $filter) {
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
export const onUpdateOrderRoom = /* GraphQL */ `
  subscription OnUpdateOrderRoom(
    $filter: ModelSubscriptionOrderRoomFilterInput
  ) {
    onUpdateOrderRoom(filter: $filter) {
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
export const onDeleteOrderRoom = /* GraphQL */ `
  subscription OnDeleteOrderRoom(
    $filter: ModelSubscriptionOrderRoomFilterInput
  ) {
    onDeleteOrderRoom(filter: $filter) {
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
export const onCreateCartRoom = /* GraphQL */ `
  subscription OnCreateCartRoom($filter: ModelSubscriptionCartRoomFilterInput) {
    onCreateCartRoom(filter: $filter) {
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
export const onUpdateCartRoom = /* GraphQL */ `
  subscription OnUpdateCartRoom($filter: ModelSubscriptionCartRoomFilterInput) {
    onUpdateCartRoom(filter: $filter) {
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
export const onDeleteCartRoom = /* GraphQL */ `
  subscription OnDeleteCartRoom($filter: ModelSubscriptionCartRoomFilterInput) {
    onDeleteCartRoom(filter: $filter) {
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
export const onCreateProductOrderRoom = /* GraphQL */ `
  subscription OnCreateProductOrderRoom(
    $filter: ModelSubscriptionProductOrderRoomFilterInput
  ) {
    onCreateProductOrderRoom(filter: $filter) {
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
export const onUpdateProductOrderRoom = /* GraphQL */ `
  subscription OnUpdateProductOrderRoom(
    $filter: ModelSubscriptionProductOrderRoomFilterInput
  ) {
    onUpdateProductOrderRoom(filter: $filter) {
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
export const onDeleteProductOrderRoom = /* GraphQL */ `
  subscription OnDeleteProductOrderRoom(
    $filter: ModelSubscriptionProductOrderRoomFilterInput
  ) {
    onDeleteProductOrderRoom(filter: $filter) {
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
export const onCreateProductCartRoom = /* GraphQL */ `
  subscription OnCreateProductCartRoom(
    $filter: ModelSubscriptionProductCartRoomFilterInput
  ) {
    onCreateProductCartRoom(filter: $filter) {
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
export const onUpdateProductCartRoom = /* GraphQL */ `
  subscription OnUpdateProductCartRoom(
    $filter: ModelSubscriptionProductCartRoomFilterInput
  ) {
    onUpdateProductCartRoom(filter: $filter) {
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
export const onDeleteProductCartRoom = /* GraphQL */ `
  subscription OnDeleteProductCartRoom(
    $filter: ModelSubscriptionProductCartRoomFilterInput
  ) {
    onDeleteProductCartRoom(filter: $filter) {
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
