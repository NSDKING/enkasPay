// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Account, BuyRoom, Product, User, LikeRoom, UserBuyRoom, UserLikeRoom, DurationPrice } = initSchema(schema);

export {
  Account,
  BuyRoom,
  Product,
  User,
  LikeRoom,
  UserBuyRoom,
  UserLikeRoom,
  DurationPrice
};