import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

describe("Given a Button Component", () => {
  describe("When is rendered", () => {
    test("It should render a button", () => {
      render(<Button />);

      const button = screen.getByRole("button");

      expect(button).toBeInTheDocument();
    });
  });
  describe("When it is clicked", () => {
    test("It should do an action", () => {
      const action = jest.fn();

      render(<Button actionOnClick={action} />);

      const button = screen.queryByRole("button");
      userEvent.click(button);

      expect(action).toHaveBeenCalled();
    });
  });
});
