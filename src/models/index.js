// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { AffiliationContact, Affiliation, Order, OneYear, ThreeMonth, OneMonth, Cart, Product, Account, User } = initSchema(schema);

export {
  AffiliationContact,
  Affiliation,
  Order,
  OneYear,
  ThreeMonth,
  OneMonth,
  Cart,
  Product,
  Account,
  User
};