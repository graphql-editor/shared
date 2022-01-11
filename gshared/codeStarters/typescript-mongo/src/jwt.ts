export default `import { FieldResolveInput } from "stucco-js";
import { verify } from "jsonwebtoken";

export const decodeToken = <T>(token: string) => {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT secret not set");
  }
  const verifiedToken = verify(token, process.env.JWT_SECRET);
  if (typeof verifiedToken !== "object") {
    throw new Error("Token is not an object");
  }
  return verifiedToken as T;
};

export const getTokenFromInput = async (
  input: FieldResolveInput
): Promise<string | undefined> => {
  if (!input.protocol?.headers) {
    return;
  }
  const { Authorization }: { Authorization?: string[] } =
    input.protocol.headers;
  if (!Authorization) {
    return;
  }
  return Authorization[0];
};`;
