import actionTypes from "./actionTypes";

export const loadRobotsActions = (robots) => ({
  type: actionTypes.loadRobots,
  robots,
});

export const loadOneRobotActions = (id) => ({
  type: actionTypes.loadOneRobot,
  id,
});
