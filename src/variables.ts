import { IConfig } from "./interfaces/config.interface";

const env = process.env.NODE_ENV || "development";
const host = process.env.APP_HOST || "localhost";
const port = process.env.APP_PORT || "8080";

export const variables: IConfig = {
  env,
  host,
  port,
};
