// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { OrderRoom, Product, CartRoom, Account, User, ProductOrderRoom, ProductCartRoom, DurationPrice } = initSchema(schema);

export {
  OrderRoom,
  Product,
  CartRoom,
  Account,
  User,
  ProductOrderRoom,
  ProductCartRoom,
  DurationPrice
};