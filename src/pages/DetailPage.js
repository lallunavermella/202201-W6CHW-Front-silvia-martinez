import { useParams } from "react-router-dom";
import OneRobot from "../components/OneRobot/OneRobot";

const DetailPage = () => {
  const params = useParams();
  const { robot } = params;

  return <OneRobot robot={robot} />;
};

export default DetailPage;
