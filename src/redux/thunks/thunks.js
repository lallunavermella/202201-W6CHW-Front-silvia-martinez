import { loadRobotsActions } from "../actions/actionCreators";

export const loadRobotsThunks = async (dispatch) => {
  const response = await fetch(process.env.API_URL);
  const robots = await response.json();

  dispatch(loadRobotsActions(robots));
};
