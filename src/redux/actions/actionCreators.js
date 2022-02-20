import actionTypes from "./actionTypes";

export const loadRobotsActions = (robots) => ({
  type: actionTypes.loadRobots,
  robots,
});

export const loadOneRobotActions = (robots) => ({
  type: actionTypes.loadOneRobot,
  robots,
});

export const deleteRobotActions = (id) => ({
  type: actionTypes.deleteRobot,
  id,
});

export const createRobotActions = (robot) => ({
  type: actionTypes.createRobot,
  robot,
});
