// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Order, OneYear, ThreeMonth, OneMonth, Cart, Product, Account, User } = initSchema(schema);

export {
  Order,
  OneYear,
  ThreeMonth,
  OneMonth,
  Cart,
  Product,
  Account,
  User
};