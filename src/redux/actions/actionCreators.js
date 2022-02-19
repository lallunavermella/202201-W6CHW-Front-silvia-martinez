import actionTypes from "./actionTypes";

export const loadRobotsActions = (robots) => ({
  type: actionTypes.loadRobots,
  robots,
});

export const loadOneRobot = (id) => ({
  type: actionTypes.loadOneRobot,
  id,
});
