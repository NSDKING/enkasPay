// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Sitchi, Bilan, Compta, Transactions, Payments, Description, Prospect, AffiliationContact, Affiliation, Order, OneYear, ThreeMonth, OneMonth, Cart, Product, Account, User } = initSchema(schema);

export {
  Sitchi,
  Bilan,
  Compta,
  Transactions,
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