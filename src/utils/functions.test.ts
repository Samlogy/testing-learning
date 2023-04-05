import { add, devide, fetchAsyc, fetchPromise } from "./functions";

test("check add()", () => {
  expect(add(1, 2)).toBe(3);
});

describe("devide()", () => {
  it("devide() correctly two numbers", () => {
    expect(devide(10, 2)).toEqual(5);
  });

  it("throws an error if second parameter is zero", () => {
    expect(() => {
      devide(10, 0);
    }).toThrowError("Parameter is not a number!");
  });
});

describe("fetch() promise", () => {
  const url = "https://jsonplaceholder.typicode.com/todos/1";
  const todo = {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  };

  test("fetch() success", async () => {
    await fetchPromise(url).then((data) => {
      expect(data).toEqual(todo);
    });
  });
});

describe("fetch() async/await", () => {
  const url = "https://jsonplaceholder.typicode.com/todos/1";
  const todo = {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  };

  it("fetch() success", async () => {
    // expect(fetchAsyc(url)).toEqual(todo);
    await expect(fetchAsyc(url)).resolves.toEqual(todo);
  });

  // it("fetch() error", async () => {
  //   await expect(fetchAsyc(url)).rejects.toMatch("error");
  // });
});
