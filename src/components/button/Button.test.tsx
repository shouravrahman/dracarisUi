import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Button from "./Button";
import { IButtonProps } from "./types";

describe("Button component", () => {
  it("renders the button with the provided label", () => {
    const props: IButtonProps = { label: "Click Me" };
    render(<Button {...props} />);

    const button = screen.getByRole("button", { name: /Click Me/i });
    expect(button).toBeInTheDocument();
  });

  it("renders the button content if no label is provided", () => {
    const props: IButtonProps = { children: "Click Me" };
    render(<Button {...props} />);

    const button = screen.getByText(/Click Me/i);
    expect(button).toBeInTheDocument();
  });
});
