// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Product, User, DurationPrice } = initSchema(schema);

export {
  Product,
  User,
  DurationPrice
};