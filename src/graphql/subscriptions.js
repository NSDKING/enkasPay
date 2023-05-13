/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAccount = /* GraphQL */ `
  subscription OnCreateAccount($filter: ModelSubscriptionAccountFilterInput) {
    onCreateAccount(filter: $filter) {
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
export const onUpdateAccount = /* GraphQL */ `
  subscription OnUpdateAccount($filter: ModelSubscriptionAccountFilterInput) {
    onUpdateAccount(filter: $filter) {
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
export const onDeleteAccount = /* GraphQL */ `
  subscription OnDeleteAccount($filter: ModelSubscriptionAccountFilterInput) {
    onDeleteAccount(filter: $filter) {
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
export const onCreateBuyRoom = /* GraphQL */ `
  subscription OnCreateBuyRoom($filter: ModelSubscriptionBuyRoomFilterInput) {
    onCreateBuyRoom(filter: $filter) {
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
export const onUpdateBuyRoom = /* GraphQL */ `
  subscription OnUpdateBuyRoom($filter: ModelSubscriptionBuyRoomFilterInput) {
    onUpdateBuyRoom(filter: $filter) {
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
export const onDeleteBuyRoom = /* GraphQL */ `
  subscription OnDeleteBuyRoom($filter: ModelSubscriptionBuyRoomFilterInput) {
    onDeleteBuyRoom(filter: $filter) {
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
export const onCreateLikeRoom = /* GraphQL */ `
  subscription OnCreateLikeRoom($filter: ModelSubscriptionLikeRoomFilterInput) {
    onCreateLikeRoom(filter: $filter) {
      id
      productLike {
        nextToken
        startedAt
      }
      users {
        nextToken
        startedAt
      }
      number
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateLikeRoom = /* GraphQL */ `
  subscription OnUpdateLikeRoom($filter: ModelSubscriptionLikeRoomFilterInput) {
    onUpdateLikeRoom(filter: $filter) {
      id
      productLike {
        nextToken
        startedAt
      }
      users {
        nextToken
        startedAt
      }
      number
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteLikeRoom = /* GraphQL */ `
  subscription OnDeleteLikeRoom($filter: ModelSubscriptionLikeRoomFilterInput) {
    onDeleteLikeRoom(filter: $filter) {
      id
      productLike {
        nextToken
        startedAt
      }
      users {
        nextToken
        startedAt
      }
      number
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
      likecount
      buyroomID
      likerooms {
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
      likecount
      buyroomID
      likerooms {
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
      likecount
      buyroomID
      likerooms {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
      staff
      birthdate
      likeroomID
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
      staff
      birthdate
      likeroomID
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
      staff
      birthdate
      likeroomID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateUserBuyRoom = /* GraphQL */ `
  subscription OnCreateUserBuyRoom(
    $filter: ModelSubscriptionUserBuyRoomFilterInput
  ) {
    onCreateUserBuyRoom(filter: $filter) {
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
        birthdate
        likeroomID
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
export const onUpdateUserBuyRoom = /* GraphQL */ `
  subscription OnUpdateUserBuyRoom(
    $filter: ModelSubscriptionUserBuyRoomFilterInput
  ) {
    onUpdateUserBuyRoom(filter: $filter) {
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
        birthdate
        likeroomID
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
export const onDeleteUserBuyRoom = /* GraphQL */ `
  subscription OnDeleteUserBuyRoom(
    $filter: ModelSubscriptionUserBuyRoomFilterInput
  ) {
    onDeleteUserBuyRoom(filter: $filter) {
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
        birthdate
        likeroomID
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
export const onCreateLikeRoomProduct = /* GraphQL */ `
  subscription OnCreateLikeRoomProduct(
    $filter: ModelSubscriptionLikeRoomProductFilterInput
  ) {
    onCreateLikeRoomProduct(filter: $filter) {
      id
      likeRoomId
      productId
      likeRoom {
        id
        number
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      product {
        id
        name
        image
        type
        buycount
        likecount
        buyroomID
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
export const onUpdateLikeRoomProduct = /* GraphQL */ `
  subscription OnUpdateLikeRoomProduct(
    $filter: ModelSubscriptionLikeRoomProductFilterInput
  ) {
    onUpdateLikeRoomProduct(filter: $filter) {
      id
      likeRoomId
      productId
      likeRoom {
        id
        number
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      product {
        id
        name
        image
        type
        buycount
        likecount
        buyroomID
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
export const onDeleteLikeRoomProduct = /* GraphQL */ `
  subscription OnDeleteLikeRoomProduct(
    $filter: ModelSubscriptionLikeRoomProductFilterInput
  ) {
    onDeleteLikeRoomProduct(filter: $filter) {
      id
      likeRoomId
      productId
      likeRoom {
        id
        number
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      product {
        id
        name
        image
        type
        buycount
        likecount
        buyroomID
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
