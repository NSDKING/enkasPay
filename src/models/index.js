// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Account, BuyRoom, Product, LikeRoom, User, DurationPrice } = initSchema(schema);

export {
  Account,
  BuyRoom,
  Product,
  LikeRoom,
  User,
  DurationPrice
};