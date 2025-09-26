import React, { useMemo, useState } from "react";

const QuizTable = ({ quizzes, currentPage, itemsPerPage }) => {
  // 👇 Filter states
  const [quizIdFilter, setQuizIdFilter] = useState("");
  const [quizNameFilter, setQuizNameFilter] = useState("");
  const [attemptFilter, setAttemptFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  // All Filters
  const filteredQuizzes = useMemo(() => {
    return quizzes.filter((quiz) => {
      const matchesId = quiz._id
        .toLowerCase()
        .includes(quizIdFilter.toLowerCase());

      const matchesName = quiz.quizName
        .toLowerCase()
        .includes(quizNameFilter.toLowerCase());

      const matchesAttempt =
        attemptFilter === "" || quiz.attemptType === attemptFilter;

      const matchesStatus =
        statusFilter === "" || quiz.runtimeStatus === statusFilter;

      return matchesId && matchesName && matchesAttempt && matchesStatus;
    });
  }, [quizzes, quizIdFilter, quizNameFilter, attemptFilter, statusFilter]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = useMemo(() => {
    return filteredQuizzes.slice(indexOfFirstItem, indexOfLastItem);
  }, [filteredQuizzes, indexOfFirstItem, indexOfLastItem]);

  return (
    <>
      <div className="quiz-filter">
        <input
          type="text"
          placeholder="Quiz Id..."
          id="search-box"
          value={quizIdFilter}
          onChange={(e) => setQuizIdFilter(e.target.value)}
        />
        <input
          type="text"
          placeholder="Quiz Name..."
          id="search-box"
          value={quizNameFilter}
          onChange={(e) => setQuizNameFilter(e.target.value)}
        />
        <select
          value={attemptFilter}
          onChange={(e) => setAttemptFilter(e.target.value)}
          id="search-box"
        >
          <option value="">All</option>
          <option value="Single">Single</option>
          <option value="Multiple">Multiple</option>
        </select>

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          id="search-box"
        >
          <option value="">All</option>
          <option value="Upcoming">Upcoming</option>
          <option value="Running">Running</option>
          <option value="Ended">Ended</option>
        </select>
      </div>
      <table className="quiz-table">
        <thead>
          <tr>
            <th>SubjectId</th>
            <th>Quiz Name</th>
            <th>Attempt Type</th>
            <th>Status</th>
            <th>Available From</th>
            <th>Available To</th>
            <th>Duration</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((quiz) => (
            <tr key={quiz._id}>
              <td>{quiz.subjectId}</td>
              <td>{quiz.quizName}</td>
              <td>{quiz.attemptType}</td>
              <td>
                <span className={`status ${quiz.runtimeStatus.toLowerCase()}`}>
                  {quiz.runtimeStatus}
                </span>
              </td>
              <td>{new Date(quiz.startTime).toLocaleString()}</td>
              <td>{new Date(quiz.endTime).toLocaleString()}</td>
              <td>{quiz.durationMinutes}</td>
              <td>
                {/* <Link to={`update-quizzes/${quiz._id}`}>
                <CiEdit className="action-btn edit-icon" />
              </Link> */}
                <button
                  onClick={() => console.log("Buton Clicked")}
                  className="action-btn attempt-btn"
                >
                  Attempt
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default QuizTable;
