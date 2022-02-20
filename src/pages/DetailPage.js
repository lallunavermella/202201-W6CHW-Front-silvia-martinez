import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import OneRobot from "../components/OneRobot/OneRobot";
import { loadOneRobotThunks } from "../redux/thunks/thunks";

const DetailPage = () => {
  let { id } = useParams();

  const dispatch = useDispatch();
  const robot = useSelector((state) => state.robots[0]);
  console.log(robot);

  useEffect(() => {
    dispatch(loadOneRobotThunks(id));
  }, [dispatch, id]);

  return <OneRobot robot={robot} />;
};

export default DetailPage;
