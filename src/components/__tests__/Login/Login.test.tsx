import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Login from "../../Login";

// loading displayed after button clicked (form submitted)
// change event on each input
// button enabled when inputs filled
// button disabled when inputs empty
// error not displayed
// after fetch() response remove loading
// after fetch() response display user's name
// after fetch() response display error (in case error occured)

jest.mock("axios", () => ({
  __esModule: true,

  default: {
    get: () => ({
      data: { id: 1, name: "John" },
    }),
  },
}));

// PRE-submittion
test("username input rendered / empty", () => {
  render(<Login />);
  const usernameInputEl = screen.getByPlaceholderText(/username/i);
  expect(usernameInputEl).toBeInTheDocument(); // rendered
  expect(usernameInputEl.value).toBe(""); // empty
});
test("password input rendered / empty", () => {
  render(<Login />);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);
  expect(passwordInputEl).toBeInTheDocument(); // rendered
  expect(passwordInputEl.value).toBe(""); // empty
});
test("button rendered / text 'Login' / disabled", () => {
  render(<Login />);
  const buttonEl = screen.getByRole("button");
  expect(buttonEl).toBeInTheDocument(); // rendered
  expect(buttonEl).toHaveTextContent(/Login/i); // Login
  expect(buttonEl).toBeDisabled(); // disabled
});
test("error message not visible", () => {
  render(<Login />);
  const errorEl = screen.getByTestId("error");
  expect(errorEl).not.toBeVisible();
});

// filling form
test("username input value change", () => {
  render(<Login />);
  const usernameInputEl = screen.getByPlaceholderText(/username/i);
  const testValue = "test";

  fireEvent.change(usernameInputEl, { target: { value: testValue } });
  expect(usernameInputEl.value).toBe(testValue);
});
test("password input value change", () => {
  render(<Login />);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);
  const testValue = "test";

  fireEvent.change(passwordInputEl, { target: { value: testValue } });
  expect(passwordInputEl.value).toBe(testValue);
});
test("button enabled when inputs filled", () => {
  render(<Login />);
  const buttonEl = screen.getByRole("button");
  const usernameInputEl = screen.getByPlaceholderText(/username/i);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);

  const testValue = "test";

  fireEvent.change(usernameInputEl, { target: { value: testValue } });
  fireEvent.change(passwordInputEl, { target: { value: testValue } });
  expect(buttonEl).not.toBeDisabled();
});

// Form-submittion
test("loading should be rendered when click", () => {
  render(<Login />);
  const buttonEl = screen.getByRole("button");
  const usernameInputEl = screen.getByPlaceholderText(/username/i);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);

  const testValue = "test";

  fireEvent.change(usernameInputEl, { target: { value: testValue } });
  fireEvent.change(passwordInputEl, { target: { value: testValue } });
  fireEvent.click(buttonEl);

  expect(buttonEl).toHaveTextContent(/please wait/i);
});

// POST-submittion
test("loading should not be rendered after fetching", async () => {
  render(<Login />);
  const buttonEl = screen.getByRole("button");
  const usernameInputEl = screen.getByPlaceholderText(/username/i);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);

  const testValue = "test";

  fireEvent.change(usernameInputEl, { target: { value: testValue } });
  fireEvent.change(passwordInputEl, { target: { value: testValue } });
  fireEvent.click(buttonEl);

  await waitFor(() => expect(buttonEl).toHaveTextContent(/Login/i));
});
test("user should be rendered after fetching", async () => {
  render(<Login />);
  const buttonEl = screen.getByRole("button");
  const usernameInputEl = screen.getByPlaceholderText(/username/i);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);

  const testValue = "test";

  fireEvent.change(usernameInputEl, { target: { value: testValue } });
  fireEvent.change(passwordInputEl, { target: { value: testValue } });
  fireEvent.click(buttonEl);

  const userItem = screen.getByTestId("user-name");

  expect(userItem).toBeInTheDocument();
});
