import actionTypes from "../actions/actionTypes";

const robotsReducers = (currentRobots = [], action = {}) => {
  let newRobots;
  switch (action.type) {
    case actionTypes.loadRobots:
      newRobots = [...action.robots];
      break;
    default:
      newRobots = [...currentRobots];
      break;
  }
  return newRobots;
};

export default robotsReducers;
