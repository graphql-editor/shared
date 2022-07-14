export const NAME_REGEX = /^([A-z0-9_-])*$/;
export const LATEST_VERSION = "latest";
export const VERSION_JSON_FILE = (name: string) => `schema-${name}.json`;
export const VERSION_SCHEMA_FILE = (name: string) => `schema-${name}.graphql`;
export const VERSION_STITCH_FILE = (name: string) => `stitch-${name}.graphql`;

export const DEPLOY_FILE = "schema.graphql";
export const FAKER_DEPLOY_FILE = "faker.json";
export const ENDPOINT_CONFIGURATION_FILE = "cloudConfig.json";
export const JAMSTACK_CONFIG_FILE = "jamstack.json";

export const IS_FAKER_DEPLOY_FILE_REGEX = /^faker.json$/;
export const IS_DEPLOY_FILE_REGEX = /^schema.graphql$/;
export const IS_VERSION_FILE_REGEX = /^schema-(.*)\.json$/;
export const IS_VERSION_SCHEMA_FILE_REGEX = /^schema-(.*)\.graphql$/;
export const IS_VERSION_STITCH_FILE_REGEX = /^stitch-(.*)\.graphql$/;

export const SLACK_JOIN = `https://discord.gg/wVcZdmd`;

export const CLOUD_FOLDERS = {
  // GraphQL Cloud editable files
  nocode: "nocode",
  /// GraphQL Cloud Forms
  forms: "forms",
  widgets: "widgets",
  restproxy: "restproxy",
  webhooks: "webhooks",
  gql: "gql",
  models: "models",
  // Microservice cloud editable files
  microserviceJs: "microservice/js",
  // Microservice cloud editable files
  microserviceGo: "microservice/go",
  // Deployment function artifact
  microservices_deployment: "microservices_deployment",
  // JAMStack cloud editable files
  frontend: "frontend",
  // JAMStack deployments available on pages.graphqleditor.com
  jamstack: "jamstack",
  gql_tests: "gql_tests",
  holygrail: "holygrail",
} as const;

export const MICROSERVICE_DEPLOYMENT_FILE = "function.zip";
export const STUCCO_FILE = "stucco.json";
export const microservicesLanguages = {
  JAVASCRIPT: "javascript",
  GO: "go",
};

export const microservicesLanguagesExtensions = {
  JAVASCRIPT_EXT: "js",
  GO_EXT: "go",
} as const;

export const jamstackDeploymentUrl = (projectId: string) =>
  `https://project-${projectId}.pages.graphqleditor.com`;

export const fileInMicroserviceFolderJs =
  (extension: string) => (fileName: string) =>
    `${CLOUD_FOLDERS.microserviceJs}/${extension}/${fileName}`;

export const fileInMicroserviceFolderGo =
  (extension: string) => (fileName: string) =>
    `${CLOUD_FOLDERS.microserviceGo}/${extension}/${fileName}`;

export const fileInCloudFolder =
  (k: keyof typeof CLOUD_FOLDERS) => (fileName: string) => {
    return `${CLOUD_FOLDERS[k]}/${fileName}`;
  };
