import actionTypes from "../actions/actionTypes";
import robotsReducers from "./robotsReducers";

describe("Given robotsReducers", () => {
  describe("When given a current obejct and action", () => {
    test("Then should return a newRobots with current objects and actions", () => {
      const robots = [1, 2, 3];
      const currentRobots = [];
      const action = {
        type: actionTypes.loadRobots,
        robots,
      };

      const newRobots = robotsReducers(currentRobots, action);

      expect(newRobots).toStrictEqual(robots);
    });
  });
  describe("When given a currentRobots and a action that is not in actionCreators", () => {
    test("Then should return the current list because its using default statement", () => {
      const currentlist = [23, 34, 47, 56];
      const action = { type: "not-work" };

      const receivedList = robotsReducers(currentlist, action);

      expect(receivedList).toEqual(currentlist);
    });
  });
  describe("When given a delete action", () => {
    test("Then should return the list minus the corresponding with the id", () => {
      const currentRobot = [
        { name: "Pepe", id: 1 },
        { name: "Pipo", id: 2 },
      ];

      const expectedRobots = [{ name: "Pipo", id: 2 }];
      const action = {
        type: actionTypes.deleteRobot,
        id: 1,
      };

      const newRobots = robotsReducers(currentRobot, action);

      expect(newRobots).toEqual(expectedRobots);
    });
  });
});
