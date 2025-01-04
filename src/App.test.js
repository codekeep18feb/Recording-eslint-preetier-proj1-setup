import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import App from "./App";

describe("Counter Component", () => {
  test("initial count is 0", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const countElement = screen.getByText("0");
    expect(countElement).toBeInTheDocument();
  });

  test("increments count when + button is clicked", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const incrementButton = screen.getByText("+");
    const countElement = screen.getByText("0");

    fireEvent.click(incrementButton);
    expect(countElement).toHaveTextContent("1");

    fireEvent.click(incrementButton);
    expect(countElement).toHaveTextContent("2");
  });

  test("decrements count when - button is clicked", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const decrementButton = screen.getByText("-");
    const countElement = screen.getByText("0");

    fireEvent.click(decrementButton);
    expect(countElement).toHaveTextContent("-1");

    fireEvent.click(decrementButton);
    expect(countElement).toHaveTextContent("-2");
  });
});
