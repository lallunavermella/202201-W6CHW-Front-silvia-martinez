import actionTypes from "./actionTypes";

export const loadRobotsActions = (robots) => ({
  type: actionTypes.loadRobots,
  robots,
});

export const loadOneRobotActions = (robots) => ({
  type: actionTypes.loadOneRobot,
  robots,
});
