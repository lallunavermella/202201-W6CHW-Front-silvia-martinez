import { loadRobotsThunks } from "./thunks";

describe("Given a load thunk function", () => {
  describe("When it's invoked", () => {
    test("it should call a dispatch", async () => {
      const dispatch = jest.fn();

      await loadRobotsThunks(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
