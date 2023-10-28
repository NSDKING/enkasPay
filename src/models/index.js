// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Payments, Description, Prospect, AffiliationContact, Affiliation, Order, OneYear, ThreeMonth, OneMonth, Cart, Product, Account, User } = initSchema(schema);

export {
  Payments,
  Description,
  Prospect,
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