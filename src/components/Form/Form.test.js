import Form from "./Form";
import { screen } from "@testing-library/react";
import renderWithProviders from "../../setupTests";

describe("Given a Form component", () => {
  describe("When it's rendered", () => {
    test("Then it should render 'Image:'", () => {
      renderWithProviders(<Form />);

      const renderedElement = screen.getByLabelText("Image:");

      expect(renderedElement).toBeInTheDocument();
    });
    test("Then it should render an input", () => {
      renderWithProviders(<Form />);

      const renderedInput = screen.getAllByRole("textbox");

      expect(renderedInput).not.toBeNull();
    });
    test("Then it should render a Placeholder input", () => {
      renderWithProviders(<Form />);

      const nameInput = screen.queryByPlaceholderText("Your Name");

      expect(nameInput).toBeInTheDocument();
    });
  });
});
