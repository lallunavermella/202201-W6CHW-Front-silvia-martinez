import {
  loadOneRobotActions,
  loadRobotsActions,
} from "../actions/actionCreators";

export const loadRobotsThunks = async (dispatch) => {
  const response = await fetch(process.env.REACT_APP_API_URL);
  const robots = await response.json();

  dispatch(loadRobotsActions(robots.robots));
};

export const loadOneRobotThunks = (id) => async (dispatch) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/${id}`);
  const robot = response.json();

  dispatch(loadOneRobotActions(robot));
};
