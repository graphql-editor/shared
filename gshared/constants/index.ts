export const NAME_REGEX = /^([A-z0-9_-])*$/;
export const LATEST_VERSION = "latest";
export const VERSION_JSON_FILE = (name: string) => `schema-${name}.json`;
export const VERSION_SCHEMA_FILE = (name: string) => `schema-${name}.graphql`;
export const VERSION_STITCH_FILE = (name: string) => `stitch-${name}.graphql`;

export const DEPLOY_FILE = "schema.graphql";
export const FAKER_DEPLOY_FILE = "faker.json";

export const IS_FAKER_DEPLOY_FILE_REGEX = /^faker.json$/;
export const IS_DEPLOY_FILE_REGEX = /^schema.graphql$/;
export const IS_VERSION_FILE_REGEX = /^schema-(.*)\.json$/;
export const IS_VERSION_SCHEMA_FILE_REGEX = /^schema-(.*)\.graphql$/;
export const IS_VERSION_STITCH_FILE_REGEX = /^stitch-(.*)\.graphql$/;

export const SLACK_JOIN = `https://discord.gg/wVcZdmd`;
