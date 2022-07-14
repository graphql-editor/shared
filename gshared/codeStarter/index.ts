import tsPackageJson from "@/gshared/codeStarter/typescript/package.json";
import tsConfigJson from "@/gshared/codeStarter/typescript/tsconfig.json";

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
  ],
};
