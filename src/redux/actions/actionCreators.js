import actionTypes from "./actionTypes";

export const loadRobotsActions = (robots) => ({
  type: actionTypes.loadRobots,
  robots,
});
