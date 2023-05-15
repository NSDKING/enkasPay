// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Product, OrderRoom, CartRoom, Account, User, ProductOrderRoom, ProductCartRoom, DurationPrice } = initSchema(schema);

export {
  Product,
  OrderRoom,
  CartRoom,
  Account,
  User,
  ProductOrderRoom,
  ProductCartRoom,
  DurationPrice
};