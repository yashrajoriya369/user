import React from "react";
import Card from "../component/Card";
import Header from "../component/Header";
import { TbWriting, TbMoodPuzzled } from "react-icons/tb";
import { RiSpeakLine } from "react-icons/ri";
import { MdOutlineQuiz } from "react-icons/md";
import { CgEreader } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Header title="Dashboard" />
      <div className="card-section">
        <Card
          title="Essay"
          value="00 Lessons"
          growth="0.0%"
          icon={<TbWriting className="card-icon" size={32} />}
        />
        <Card
          title="Speaking"
          value="00 Lessons"
          growth="0.0%"
          icon={<RiSpeakLine className="card-icon" size={32} />}
        />
        <Card
          title="Jumble Parawords"
          value="00 Lessons"
          growth="0.0%"
          icon={<TbMoodPuzzled className="card-icon" size={32} />}
        />
        <Card
          title="Quiz"
          value="00 Lessons"
          growth="0.0%"
          onClick={() => {
            navigate("quizzes");
          }}
          icon={<MdOutlineQuiz className="card-icon" size={32} />}
        />
        <Card
          title="Reading"
          value="00 Lessons"
          growth="0.0%"
          icon={<CgEreader className="card-icon" size={32} />}
        />
      </div>
    </div>
  );
};

export default Dashboard;
