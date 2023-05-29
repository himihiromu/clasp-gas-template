import { hello } from "~/shared/src/shared";

export const helloFunction = (): string => {
  hello();
  return "hello";
};
