import { loadRobotsActions } from "./actionCreators";

describe("Given a loadRobotActions", () => {
  describe("When it receives a robot 1 and robot2", () => {
    test("Then it should return an action with robot inside", () => {
      const robots = [
        {
          id: 1,
          name: "Pepe",
        },
        { id: 2, name: "Pipo" },
      ];

      const expectedAction = { type: "load-robots", robots: robots };
      const action = loadRobotsActions(robots);
      expect(action).toEqual(expectedAction);
    });
  });
});
