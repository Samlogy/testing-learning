import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import TestWithMockData from "../../TestWithMockData";
import userEvent from "@testing-library/user-event";

const mockData = [
  {
    id: 1,
    first_name: "Fletcher",
    last_name: "McVanamy",
    email: "mmcvanamy0@e-recht24.de",
    age: 30,
  },
  {
    id: 2,
    first_name: "Clarice",
    last_name: "Harrild",
    email: "charrild1@dion.ne.jp",
    age: 35,
  },
  {
    id: 3,
    first_name: "Amby",
    last_name: "Emmer",
    email: "aemmer2@buzzfeed.com",
    age: 67,
  },
];

// test("List renders successfully", () => {
//   render(<TestWithMockData data={mockData} />);
//   expect(screen.getByText(/fletcher/i)).toBeInTheDocument();
// });

describe("Test with mock data", () => {
  it("Ordered list renders", () => {
    render(<TestWithMockData data={mockData} displayUnorderedList={false} />);
    expect(screen.getByText(/McVanamy/i)).toBeInTheDocument();
  });

  it("Email link click handler called", async () => {
    const mockHandleClick = jest.fn();
    render(
      <TestWithMockData
        data={mockData}
        displayUnorderedList={true}
        handleClick={mockHandleClick}
      />
    );
    await userEvent.click(screen.getByText(/mmcvanamy0@e-recht24.de/i));
    expect(mockHandleClick).toHaveBeenCalled();
  });
});


