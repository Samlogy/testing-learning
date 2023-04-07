import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Counter from "../../Counter";

describe("Counter cpt", () => {
  it("counter rendered / int value 0", () => {
    render(<Counter />);
    const countEl = screen.getByTestId("count");
    expect(countEl).toBeInTheDocument();
    expect(countEl).toHaveTextContent("0");
  });

  it("click -", () => {
    render(<Counter />);
    const countEl = screen.getByTestId("count");
    const btnDec = screen.getByRole("button", {
      name: "-",
    });

    expect(btnDec).toBeInTheDocument(); // rendered
    fireEvent.click(btnDec); // clicked
    expect(countEl).toHaveTextContent("-1"); // decrement
  });

  it("click +", () => {
    render(<Counter />);
    const countEl = screen.getByTestId("count");
    const btnInc = screen.getByRole("button", {
      name: "+",
    });

    expect(btnInc).toBeInTheDocument(); // rendered
    fireEvent.click(btnInc); // clicked
    expect(countEl).toHaveTextContent("1"); // decrement
  });

  it("click reset", () => {
    render(<Counter />);
    const countEl = screen.getByTestId("count");
    const btnReset = screen.getByRole("button", {
      name: /reset/i,
    });

    expect(btnReset).toBeInTheDocument(); // rendered
    fireEvent.click(btnReset); // clicked
    expect(countEl).toHaveTextContent("0"); // decrement
  });
});
