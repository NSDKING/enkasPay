/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAccount = /* GraphQL */ `
  mutation CreateAccount(
    $input: CreateAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    createAccount(input: $input, condition: $condition) {
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
export const updateAccount = /* GraphQL */ `
  mutation UpdateAccount(
    $input: UpdateAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    updateAccount(input: $input, condition: $condition) {
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
export const deleteAccount = /* GraphQL */ `
  mutation DeleteAccount(
    $input: DeleteAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    deleteAccount(input: $input, condition: $condition) {
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
export const createBuyRoom = /* GraphQL */ `
  mutation CreateBuyRoom(
    $input: CreateBuyRoomInput!
    $condition: ModelBuyRoomConditionInput
  ) {
    createBuyRoom(input: $input, condition: $condition) {
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
export const updateBuyRoom = /* GraphQL */ `
  mutation UpdateBuyRoom(
    $input: UpdateBuyRoomInput!
    $condition: ModelBuyRoomConditionInput
  ) {
    updateBuyRoom(input: $input, condition: $condition) {
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
export const deleteBuyRoom = /* GraphQL */ `
  mutation DeleteBuyRoom(
    $input: DeleteBuyRoomInput!
    $condition: ModelBuyRoomConditionInput
  ) {
    deleteBuyRoom(input: $input, condition: $condition) {
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
export const createLikeRoom = /* GraphQL */ `
  mutation CreateLikeRoom(
    $input: CreateLikeRoomInput!
    $condition: ModelLikeRoomConditionInput
  ) {
    createLikeRoom(input: $input, condition: $condition) {
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
export const updateLikeRoom = /* GraphQL */ `
  mutation UpdateLikeRoom(
    $input: UpdateLikeRoomInput!
    $condition: ModelLikeRoomConditionInput
  ) {
    updateLikeRoom(input: $input, condition: $condition) {
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
export const deleteLikeRoom = /* GraphQL */ `
  mutation DeleteLikeRoom(
    $input: DeleteLikeRoomInput!
    $condition: ModelLikeRoomConditionInput
  ) {
    deleteLikeRoom(input: $input, condition: $condition) {
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
export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
      id
      name
      image
      type
      price {
        one_month
        three_month
        one_year
      }
 
   
    }
  }
`;
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
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
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
      id
      name
      image
      type
      price {
        one_month
        three_month
        one_year
      }
  
  
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createUserBuyRoom = /* GraphQL */ `
  mutation CreateUserBuyRoom(
    $input: CreateUserBuyRoomInput!
    $condition: ModelUserBuyRoomConditionInput
  ) {
    createUserBuyRoom(input: $input, condition: $condition) {
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
export const updateUserBuyRoom = /* GraphQL */ `
  mutation UpdateUserBuyRoom(
    $input: UpdateUserBuyRoomInput!
    $condition: ModelUserBuyRoomConditionInput
  ) {
    updateUserBuyRoom(input: $input, condition: $condition) {
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
export const deleteUserBuyRoom = /* GraphQL */ `
  mutation DeleteUserBuyRoom(
    $input: DeleteUserBuyRoomInput!
    $condition: ModelUserBuyRoomConditionInput
  ) {
    deleteUserBuyRoom(input: $input, condition: $condition) {
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
export const createLikeRoomProduct = /* GraphQL */ `
  mutation CreateLikeRoomProduct(
    $input: CreateLikeRoomProductInput!
    $condition: ModelLikeRoomProductConditionInput
  ) {
    createLikeRoomProduct(input: $input, condition: $condition) {
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
export const updateLikeRoomProduct = /* GraphQL */ `
  mutation UpdateLikeRoomProduct(
    $input: UpdateLikeRoomProductInput!
    $condition: ModelLikeRoomProductConditionInput
  ) {
    updateLikeRoomProduct(input: $input, condition: $condition) {
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
export const deleteLikeRoomProduct = /* GraphQL */ `
  mutation DeleteLikeRoomProduct(
    $input: DeleteLikeRoomProductInput!
    $condition: ModelLikeRoomProductConditionInput
  ) {
    deleteLikeRoomProduct(input: $input, condition: $condition) {
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
