// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Cart, Product, Account, User, DurationPrice } = initSchema(schema);

export {
  Cart,
  Product,
  Account,
  User,
  DurationPrice
};