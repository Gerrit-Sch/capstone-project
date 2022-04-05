import { render, screen } from "@testing-library/react";
import Input from "./Input";

describe("Input", () => {
  it("shows an input", () => {
    render(<Input />);

    const Input = screen.getByRole("input", { name: / areaCode /i });
    expect(Input).toBeInTheDocument();
  });
});
