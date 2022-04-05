import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  it("shows a button", () => {
    render(<Button />);

    const submitButton = screen.getByRole("button", {
      name: /Find your place to live!/i,
    });
    expect(submitButton).toBeInTheDocument();
  });
});
