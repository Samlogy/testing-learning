import { add, devide } from "./functions";

test("check add()", () => {
  expect(add(1, 2)).toBe(3);
});

describe("devide function", () => {
  it("devide() correctly two numbers", () => {
    expect(devide(10, 2)).toEqual(5);
  });

  it("throws an error if second parameter is zero", () => {
    expect(() => {
      devide(10, 0);
    }).toThrowError("Parameter is not a number!");
  });
});
