import React from "react";

export default function Progress({
  numOfQuestions,
  index,
  points,
  maxPossiblePoints,
  answer,
}) {
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
