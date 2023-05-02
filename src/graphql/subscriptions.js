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
      userID
      numero
      endDateProfil
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
      userID
      numero
      endDateProfil
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
      userID
      numero
      endDateProfil
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
export const onUpdateBuyRoom = /* GraphQL */ `
  subscription OnUpdateBuyRoom($filter: ModelSubscriptionBuyRoomFilterInput) {
    onUpdateBuyRoom(filter: $filter) {
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
export const onDeleteBuyRoom = /* GraphQL */ `
  subscription OnDeleteBuyRoom($filter: ModelSubscriptionBuyRoomFilterInput) {
    onDeleteBuyRoom(filter: $filter) {
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
export const onCreateLikeRoom = /* GraphQL */ `
  subscription OnCreateLikeRoom($filter: ModelSubscriptionLikeRoomFilterInput) {
    onCreateLikeRoom(filter: $filter) {
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
export const onUpdateLikeRoom = /* GraphQL */ `
  subscription OnUpdateLikeRoom($filter: ModelSubscriptionLikeRoomFilterInput) {
    onUpdateLikeRoom(filter: $filter) {
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
export const onDeleteLikeRoom = /* GraphQL */ `
  subscription OnDeleteLikeRoom($filter: ModelSubscriptionLikeRoomFilterInput) {
    onDeleteLikeRoom(filter: $filter) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateBuyRoomUser = /* GraphQL */ `
  subscription OnCreateBuyRoomUser(
    $filter: ModelSubscriptionBuyRoomUserFilterInput
  ) {
    onCreateBuyRoomUser(filter: $filter) {
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
export const onUpdateBuyRoomUser = /* GraphQL */ `
  subscription OnUpdateBuyRoomUser(
    $filter: ModelSubscriptionBuyRoomUserFilterInput
  ) {
    onUpdateBuyRoomUser(filter: $filter) {
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
export const onDeleteBuyRoomUser = /* GraphQL */ `
  subscription OnDeleteBuyRoomUser(
    $filter: ModelSubscriptionBuyRoomUserFilterInput
  ) {
    onDeleteBuyRoomUser(filter: $filter) {
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
export const onCreateLikeRoomUser = /* GraphQL */ `
  subscription OnCreateLikeRoomUser(
    $filter: ModelSubscriptionLikeRoomUserFilterInput
  ) {
    onCreateLikeRoomUser(filter: $filter) {
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
export const onUpdateLikeRoomUser = /* GraphQL */ `
  subscription OnUpdateLikeRoomUser(
    $filter: ModelSubscriptionLikeRoomUserFilterInput
  ) {
    onUpdateLikeRoomUser(filter: $filter) {
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
export const onDeleteLikeRoomUser = /* GraphQL */ `
  subscription OnDeleteLikeRoomUser(
    $filter: ModelSubscriptionLikeRoomUserFilterInput
  ) {
    onDeleteLikeRoomUser(filter: $filter) {
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
