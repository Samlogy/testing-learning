import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import Text from "../../Text";

test("should render text component", () => {
  const text = "Hello, world!";
  render(<Text text={text} />);
  var textElem = screen.getByTestId("text");
  expect(textElem).toBeInTheDocument();
  expect(textElem).toHaveTextContent(text);
});
