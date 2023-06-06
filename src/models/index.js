// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { OneYear, ThreeMonth, OneMonth, Cart, Product, Account, User, DurationPrice } = initSchema(schema);

export {
  OneYear,
  ThreeMonth,
  OneMonth,
  Cart,
  Product,
  Account,
  User,
  DurationPrice
};