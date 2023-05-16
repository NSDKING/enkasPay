/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
export const createOrderRoom = /* GraphQL */ `
  mutation CreateOrderRoom(
    $input: CreateOrderRoomInput!
    $condition: ModelOrderRoomConditionInput
  ) {
    createOrderRoom(input: $input, condition: $condition) {
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
export const updateOrderRoom = /* GraphQL */ `
  mutation UpdateOrderRoom(
    $input: UpdateOrderRoomInput!
    $condition: ModelOrderRoomConditionInput
  ) {
    updateOrderRoom(input: $input, condition: $condition) {
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
export const deleteOrderRoom = /* GraphQL */ `
  mutation DeleteOrderRoom(
    $input: DeleteOrderRoomInput!
    $condition: ModelOrderRoomConditionInput
  ) {
    deleteOrderRoom(input: $input, condition: $condition) {
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
export const createCartRoom = /* GraphQL */ `
  mutation CreateCartRoom(
    $input: CreateCartRoomInput!
    $condition: ModelCartRoomConditionInput
  ) {
    createCartRoom(input: $input, condition: $condition) {
      id
      number
      userID
      products {
 
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateCartRoom = /* GraphQL */ `
  mutation UpdateCartRoom(
    $input: UpdateCartRoomInput!
    $condition: ModelCartRoomConditionInput
  ) {
    updateCartRoom(input: $input, condition: $condition) {
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
export const deleteCartRoom = /* GraphQL */ `
  mutation DeleteCartRoom(
    $input: DeleteCartRoomInput!
    $condition: ModelCartRoomConditionInput
  ) {
    deleteCartRoom(input: $input, condition: $condition) {
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
export const  createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      FamilyName
      LastName
      city
      mail
      birthdate
      staff
      phoneNumber
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createProductOrderRoom = /* GraphQL */ `
  mutation CreateProductOrderRoom(
    $input: CreateProductOrderRoomInput!
    $condition: ModelProductOrderRoomConditionInput
  ) {
    createProductOrderRoom(input: $input, condition: $condition) {
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
export const updateProductOrderRoom = /* GraphQL */ `
  mutation UpdateProductOrderRoom(
    $input: UpdateProductOrderRoomInput!
    $condition: ModelProductOrderRoomConditionInput
  ) {
    updateProductOrderRoom(input: $input, condition: $condition) {
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
export const deleteProductOrderRoom = /* GraphQL */ `
  mutation DeleteProductOrderRoom(
    $input: DeleteProductOrderRoomInput!
    $condition: ModelProductOrderRoomConditionInput
  ) {
    deleteProductOrderRoom(input: $input, condition: $condition) {
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
export const createProductCartRoom = /* GraphQL */ `
  mutation CreateProductCartRoom(
    $input: CreateProductCartRoomInput!
    $condition: ModelProductCartRoomConditionInput
  ) {
    createProductCartRoom(input: $input, condition: $condition) {
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
export const updateProductCartRoom = /* GraphQL */ `
  mutation UpdateProductCartRoom(
    $input: UpdateProductCartRoomInput!
    $condition: ModelProductCartRoomConditionInput
  ) {
    updateProductCartRoom(input: $input, condition: $condition) {
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
export const deleteProductCartRoom = /* GraphQL */ `
  mutation DeleteProductCartRoom(
    $input: DeleteProductCartRoomInput!
    $condition: ModelProductCartRoomConditionInput
  ) {
    deleteProductCartRoom(input: $input, condition: $condition) {
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
