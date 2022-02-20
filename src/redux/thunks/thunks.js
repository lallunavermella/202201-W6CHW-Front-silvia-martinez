import {
  createRobotActions,
  deleteRobotActions,
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
  const robots = await response.json();

  dispatch(loadOneRobotActions(robots));
};

export const deleteRobotThunks = (id) => async (dispatch) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/${id}`, {
    method: "DELETE",
  });
  if (response.ok) {
    dispatch(deleteRobotActions(id));
  }
};

export const createdRobotThunk = (robot) => async (dispatch) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(robot),
  });
  const newRobot = await response.json();

  if (response.ok) {
    dispatch(createRobotActions(newRobot));
  }
};
