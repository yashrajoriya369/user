import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const AttemptInstructions = () => {
  const navigate = useNavigate();
  const { quizId } = useParams();

  const enterFullScreen = async () => {
    const elem = document.getElementById("quiz-content");

    try {
      if (elem.requestFullscreen) {
        await elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) {
        await elem.webkitRequestFullscreen();
      }
    } catch (error) {
      console.error("Fullscreen request denied:", error);
      alert("Please allow fullscreen mode to start the quiz.");
    }
  };

  useEffect(() => {
    enterFullScreen();
  }, []);
  const handleStartQuiz = () => {
    navigate(`/dashboard/quizzes/${quizId}/attempt`);
  };
  return (
    <div id="quiz-content" style={{ backgroundColor: "#FFF", color: "#000" }}>
      <h2>Quiz Instructions</h2>
      <ul>
        <li>Read each question carefully before answering.</li>
        <li>You have limited time to complete this quiz.</li>
        <li>No negative marking unless specified.</li>
        <li>Click "Start Quiz" when you are ready.</li>
      </ul>
      <button onClick={handleStartQuiz}>Start Quiz</button>
    </div>
  );
};

export default AttemptInstructions;
