import { loadRobotsActions, deleteRobotActions } from "./actionCreators";

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
  describe("When it receives an action delete", () => {
    test("Then it should return an action with tasks inside", () => {
      const robots = [
        {
          id: 1,
          name: "Pepe",
        },
        { id: 2, name: "Pipo" },
      ];
      const id = 1;
      const expectedAction = { type: "delete-robot", id: id };

      const action = deleteRobotActions(robots[0].id);
      expect(action).toEqual(expectedAction);
    });
  });
});
