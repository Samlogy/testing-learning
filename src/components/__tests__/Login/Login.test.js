import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Login from "../../Login";

jest.mock("axios", () => ({
  __esModule: true,

  default: {
    get: () => ({
      data: { id: 1, name: "John" },
    }),
  },
}));

//
describe("Login Form", () => {
  it("username input rendered / empty", () => {
    render(<Login />);
    const usernameInputEl = screen.getByPlaceholderText(/username/i);
    expect(usernameInputEl).toBeInTheDocument(); // rendered
    expect(usernameInputEl.value).toBe(""); // value empty
  });
  it("password input rendered / empty", () => {
    render(<Login />);
    const passwordInputEl = screen.getByPlaceholderText(/password/i);
    expect(passwordInputEl).toBeInTheDocument(); // rendered
    expect(passwordInputEl.value).toBe(""); // value empty
  });
  it("button rendered / text 'Login' / disabled", () => {
    render(<Login />);
    const buttonEl = screen.getByRole("button");
    expect(buttonEl).toBeInTheDocument(); // rendered
    expect(buttonEl).toHaveTextContent(/Login/i); // text "Login"
    expect(buttonEl).toBeDisabled(); // disabled
  });
  it("error message not visible", () => {
    render(<Login />);
    const errorEl = screen.getByTestId("error");
    expect(errorEl).not.toBeVisible();
  });

  it("username input value change", () => {
    render(<Login />);
    const usernameInputEl = screen.getByPlaceholderText(/username/i);
    const testValue = "test";

    fireEvent.change(usernameInputEl, { target: { value: testValue } });
    expect(usernameInputEl.value).toBe(testValue);
  });
  it("password input value change", () => {
    render(<Login />);
    const passwordInputEl = screen.getByPlaceholderText(/password/i);
    const testValue = "test";

    fireEvent.change(passwordInputEl, { target: { value: testValue } });
    expect(passwordInputEl.value).toBe(testValue);
  });
  it("button enabled when inputs filled", () => {
    render(<Login />);
    const buttonEl = screen.getByRole("button");
    const usernameInputEl = screen.getByPlaceholderText(/username/i);
    const passwordInputEl = screen.getByPlaceholderText(/password/i);

    const testValue = "test";

    // inputs change (event)
    fireEvent.change(usernameInputEl, { target: { value: testValue } });
    fireEvent.change(passwordInputEl, { target: { value: testValue } });

    // button when inputs filled not disabled
    expect(buttonEl).not.toBeDisabled();

    // button  when inputs filled not disabled & clicked -> text must be "please wait"
    fireEvent.click(buttonEl);
    expect(buttonEl).toHaveTextContent(/please wait/i);
  });

  it("loading should not be rendered after fetching", async () => {
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
  it("user's name rendered after fetching", async () => {
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
});
