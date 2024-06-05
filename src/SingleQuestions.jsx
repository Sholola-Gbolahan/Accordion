import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const SingleQuestions = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);

  return <div>{title}</div>;
};

export default SingleQuestions;
