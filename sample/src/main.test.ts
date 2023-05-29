import { helloFunction } from "./main";

describe(helloFunction.name, () => {
  it("should return greeting", () => {
    const greeting = helloFunction();

    expect(greeting).toBe("hello");
  });
});
