export default `import { MongoClient, Db } from 'mongodb';

type ToMongo<T> = T extends object[] ? string[] : T extends object ? string : T;
type Nullify<T> = T extends undefined ? undefined | null : T;
type NullifyObject<T> = {
  [P in keyof T]: Nullify<T[P]>;
};
export type MongoModel<T, Replace = {}> = NullifyObject<{
    [P in keyof Omit<T, keyof Replace>]: ToMongo<T[P]>;
  }> &
    Replace;

const aClient = new MongoClient(process.env.MONGO_URL);
let mongoConnection: { db: Db; client: MongoClient } | undefined = undefined;

export const connectMongoDb = async () => {
  if (mongoConnection) {
    return Promise.resolve(mongoConnection);
  }
  if (!process.env.MONGO_URL) {
    throw new Error('Please provide database url in your environment settings');
  }
  const client = await aClient.connect();
  const db = client.db();
  mongoConnection = {
    client,
    db,
  };
  return mongoConnection;
};`;
