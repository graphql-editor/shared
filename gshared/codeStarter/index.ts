import tsPackageJson from "@/gshared/codeStarter/typescript/package.json";
import tsConfigJson from "@/gshared/codeStarter/typescript/tsconfig.json";
import stuccoJson from "@/gshared/codeStarter/typescript/stucco.json";
import { STUCCO_FILE } from "@/gshared/constants";

const stringBeautify = (v: any) => JSON.stringify(v, null, 4);

export const codeStarter = {
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
    {
      filename: STUCCO_FILE,
      content: stringBeautify(stuccoJson),
    },
  ],
};
