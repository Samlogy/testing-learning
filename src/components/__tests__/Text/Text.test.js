import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Text from "../../Text";

test("should render text component", () => {
  const text = "Hello, world!";
  render(<Text text={text} />);
  const textElem = screen.getByTestId("text");
  expect(textElem).toBeInTheDocument();
  expect(textElem).toHaveTextContent(text);
});
