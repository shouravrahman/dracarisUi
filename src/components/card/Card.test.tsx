import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Card from "./Card";
import { CardProps } from "./Card";

describe("Card component", () => {
  it("renders the card with the provided title", () => {
    const props: CardProps = { title: "Card Title", children: "Card Content" };
    render(<Card {...props} />);

    const title = screen.getByText(/Card Title/i);
    expect(title).toBeInTheDocument();
  });

  it("renders the card content", () => {
    const props: CardProps = { children: "Card Content" };
    render(<Card {...props} />);

    const content = screen.getByText(/Card Content/i);
    expect(content).toBeInTheDocument();
  });

  it("renders the card footer", () => {
    const props: CardProps = {
      children: "Card Content",
      footer: "Card Footer",
    };
    render(<Card {...props} />);

    const footer = screen.getByText(/Card Footer/i);
    expect(footer).toBeInTheDocument();
  });

  it("applies custom className", () => {
    const props: CardProps = {
      children: "Card Content",
      className: "custom-class",
    };
    const { container } = render(<Card {...props} />);

    expect(container.firstChild).toHaveClass("custom-class");
  });
});
