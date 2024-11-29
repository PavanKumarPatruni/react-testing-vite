import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import App from "./App";

describe("App component", () => {
  it("renders count", () => {
    render(<App />);

    const count = screen.getByText(/count is/i);
    expect(count).toHaveTextContent("count is 0");
  });

  it("increments count", () => {
    render(<App />);

    const incrementButton = screen.getByText(/increment/i);
    fireEvent.click(incrementButton);

    const count = screen.getByText(/count is/i);
    expect(count).toHaveTextContent("count is 1");
  });

  it("decrements count", () => {
    render(<App />);

    const decrementButton = screen.getByText(/decrement/i);
    fireEvent.click(decrementButton);

    const count = screen.getByText(/count is/i);
    expect(count).toHaveTextContent("count is -1");
  });

  it("resets count", () => {
    render(<App />);

    const incrementButton = screen.getByText(/increment/i);
    fireEvent.click(incrementButton);

    const resetButton = screen.getByText(/reset/i);
    fireEvent.click(resetButton);

    const count = screen.getByText(/count is/i);
    expect(count).toHaveTextContent("count is 0");
  });

  it("switches the sign of count", () => {
    render(<App />);

    const incrementButton = screen.getByText(/increment/i);
    fireEvent.click(incrementButton);

    const switchSignButton = screen.getByText(/switch the sign/i);
    fireEvent.click(switchSignButton);

    const count = screen.getByText(/count is/i);
    expect(count).toHaveTextContent("count is -1");
  });
});
