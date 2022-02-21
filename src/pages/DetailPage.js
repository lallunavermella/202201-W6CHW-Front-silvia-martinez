import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button/Button";
import OneRobot from "../components/OneRobot/OneRobot";
import { loadOneRobotThunks } from "../redux/thunks/thunks";

const DetailPage = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const robot = useSelector((state) => state.robots[0]);

  useEffect(() => {
    dispatch(loadOneRobotThunks(id));
  }, [dispatch, id]);

  const navigate = useNavigate();
  const goHome = () => {
    navigate(`/`);
  };

  return (
    <>
      <Button text={"Back"} actionOnClick={goHome} />
      {robot && <OneRobot robot={robot} />}
    </>
  );
};

export default DetailPage;
