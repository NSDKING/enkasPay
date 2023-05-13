// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Account, BuyRoom, Product, LikeRoom, User, UserBuyRoom, LikeRoomProduct, LikeRoomUser, DurationPrice } = initSchema(schema);

export {
  Account,
  BuyRoom,
  Product,
  LikeRoom,
  User,
  UserBuyRoom,
  LikeRoomProduct,
  LikeRoomUser,
  DurationPrice
};