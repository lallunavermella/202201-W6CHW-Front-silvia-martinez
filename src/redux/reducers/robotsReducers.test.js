import actionTypes from "../actions/actionTypes";
import robotsReducers from "./robotsReducers";

describe("Given robotsReducer", () => {
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
  describe("When given a currentlist and a action that is not in actionCreators", () => {
    test("Then should return the current list because its using default statement", () => {
      const currentlist = [23, 34, 47, 56];
      const action = { type: "not-work" };

      const receivedList = robotsReducers(currentlist, action);

      expect(receivedList).toEqual(currentlist);
    });
  });
});
