import { getFullName } from ".";

describe("when formatting ", () => {
  it("should return fullName", () => {
    expect(getFullName("John", "Doe")).toStrictEqual("John Doe");
  });
});
