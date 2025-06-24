import React from "react";
import { useQuiz } from "../context/QuizContext";

export default function Progress() {
  const { numOfQuestions, index, points, maxPossiblePoints, answer } =
    useQuiz();

  return (
    <header className="progress">
      <progress max={numOfQuestions} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index}</strong> / {numOfQuestions}
      </p>
      <p>
        Points <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
}
