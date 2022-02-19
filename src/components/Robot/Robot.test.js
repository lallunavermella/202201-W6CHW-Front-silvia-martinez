import { screen, render } from "@testing-library/react";

import Robot from "./Robot";

describe("Given a Task component", () => {
  describe("When it is instancied", () => {
    test("It should render a name", () => {
      render(<Robot />);

      const heading = screen.getByRole("heading", { name: "Nombre" });

      expect(heading).toBeInTheDocument();
    });
  });
});
