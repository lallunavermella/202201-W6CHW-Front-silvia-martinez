import { useParams } from "react-router-dom";
import OneRobot from "../components/OneRobot/OneRobot";

const DetailPage = () => {
  const params = useParams();
  const { id } = params;

  return <OneRobot robot={id} />;
};

export default DetailPage;
