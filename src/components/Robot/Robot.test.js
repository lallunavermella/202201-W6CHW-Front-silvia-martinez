import { screen, render } from "@testing-library/react";

import Robot from "./Robot";

describe("Given a Robot component", () => {
  describe("When it is instancied", () => {
    test("It should render a heading", () => {
      render(<Robot />);

      const heading = screen.getByRole("heading", { name: "Nombre" });

      expect(heading).toBeInTheDocument();
    });
  });
});
