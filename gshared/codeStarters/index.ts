import tsPackageJson from "@/gshared/codeStarters/typescript/package.json";
import tsConfigJson from "@/gshared/codeStarters/typescript/tsconfig.json";

import tsMongoPackageJson from "@/gshared/codeStarters/typescript-mongo/package.json";
import tsMongoConfigJson from "@/gshared/codeStarters/typescript-mongo/tsconfig.json";
import tsMongoDb from "@/gshared/codeStarters/typescript-mongo/src/db";
import tsMongoJWT from "@/gshared/codeStarters/typescript-mongo/src/jwt";

const stringBeautify = (v: any) => JSON.stringify(v, null, 4);

export const codeStarters = {
  empty: {
    name: "Empty",
    type: "empty",
    description: "Empty project without files",
    files: [],
  },
  basic: {
    name: "Basic",
    type: "ts",
    description: "Basic typescript backend project",
    files: [
      {
        filename: "package.json",
        content: stringBeautify(tsPackageJson),
      },
      {
        filename: "tsconfig.json",
        content: stringBeautify(tsConfigJson),
      },
    ],
  },
  basicMongo: {
    name: "Mongo + JWT",
    type: "ts",
    description:
      "Basic typescript backend project with mongodb preinstalled. It has also JWT support included.",
    files: [
      {
        filename: "package.json",
        content: stringBeautify(tsMongoPackageJson),
      },
      {
        filename: "tsconfig.json",
        content: stringBeautify(tsMongoConfigJson),
      },
      {
        filename: "src/db.ts",
        content: tsMongoDb,
      },
      {
        filename: "src/jwt.ts",
        content: tsMongoJWT,
      },
    ],
  },
};
