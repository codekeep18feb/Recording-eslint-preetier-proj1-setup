import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./components/Counter"; // Importing the Counter component

describe("Counter Component", () => {
  test("initial count is 0", () => {
    render(<Counter />);
    const countElement = screen.getByText("0");
    expect(countElement).toBeInTheDocument();
  });

  test("increments count when + button is clicked", () => {
    render(<Counter />);
    const incrementButton = screen.getByText("+");
    const countElement = screen.getByText("0");

    fireEvent.click(incrementButton);
    expect(countElement).toHaveTextContent("1");

    fireEvent.click(incrementButton);
    expect(countElement).toHaveTextContent("2");
  });

  test("decrements count when - button is clicked", () => {
    render(<Counter />);
    const decrementButton = screen.getByText("-");
    const countElement = screen.getByText("0");

    fireEvent.click(decrementButton);
    expect(countElement).toHaveTextContent("-1");

    fireEvent.click(decrementButton);
    expect(countElement).toHaveTextContent("-2");
  });
});
