import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import QuizTable from "../component/QuizTable";
import Pagination from "../component/Pagination";
import { listQuizzes } from "../feature/quiz/quizSlice";
import StatusCard from "../component/StatusCard";
import {
  FaRegListAlt,
  FaPlay,
  FaHourglassHalf,
  FaCheckCircle,
} from "react-icons/fa";

const Quiz = () => {
  const dispatch = useDispatch();
  const { quizzes, isLoading } = useSelector((state) => state.quiz);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  const totalPages = Math.ceil(quizzes.length / itemsPerPage);

  useEffect(() => {
    dispatch(listQuizzes());
  }, [dispatch]);

  const cardData = [
    {
      icon: <FaRegListAlt />,
      bgColor: "#cce5ff",
      count: 4569,
      label: "Quizzes",
      countColor: "#00cfff",
      iconBg: "#007bff",
    },
    {
      icon: <FaPlay />,
      bgColor: "#f8d7da",
      count: 0,
      label: "Active",
      countColor: "#dc3545",
      iconBg: "#dc3545",
    },
    {
      icon: <FaHourglassHalf />,
      bgColor: "#fff3cd",
      count: 4561,
      label: "Remaining",
      countColor: "#fd7e14",
      iconBg: "#fd7e14",
    },
    {
      icon: <FaCheckCircle />,
      bgColor: "#d4edda",
      count: 8,
      label: "Finished",
      countColor: "#28a745",
      iconBg: "#28a745",
    },
  ];

  return (
    <div style={{overflowY: "auto"}}>
      <div className="quiz-grid">
        {cardData.map((card, index) => (
          <StatusCard key={index} {...card} />
        ))}
      </div>
      <div className="main-table-container">
        <div className="table-container">
          <div className="table-header">
            <h2>All Quizzes</h2>
          </div>

          {isLoading ? (
            <p>Loading quizzes...</p>
          ) : (
            <>
              <QuizTable
                quizzes={quizzes}
                currentPage={currentPage}
                itemsPerPage={itemsPerPage}
              />
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                paginate={setCurrentPage}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
