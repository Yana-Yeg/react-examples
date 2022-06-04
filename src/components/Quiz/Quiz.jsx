import { useState } from "react";
import Info from "../Info/Info";
import style from "./Quiz.module.css";

const QUESTIONS = [
  {
    question: "What is 2*(4+4)?",
    answers: ["2", "4", "8", "16"],
    correct: 3,
  },
  {
    question: "What is 2*2+2?",
    answers: ["2", "4", "6", "8"],
    correct: 2,
  },
  {
    question: "What is 9*9?",
    answers: ["18", "81", "80", "79"],
    correct: 1,
  },
  {
    question: "What is the capital of Germany?",
    answers: ["Hamburg", "München", "Dortmund", "Berlin"],
    correct: 3,
  },
];
const instruction = `Choose your answer and go further. At the end of quiz you will have your scores`;

const Quiz = () => {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleAnswer = (currentQuestion, index) => {
    if (QUESTIONS[currentQuestion].correct === index) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div className={style.wrapper}>
      <Info text={instruction} />
      {currentQuestion < QUESTIONS.length && (
        <>
          <h3>{QUESTIONS[currentQuestion].question}</h3>
          {QUESTIONS[currentQuestion].answers.map((answer, index) => (
            <p
              onClick={() => handleAnswer(currentQuestion, index)}
              key={answer + index}
            >
              {answer}
            </p>
          ))}
        </>
      )}
      {currentQuestion >= QUESTIONS.length && (
        <p>{`You scored ${score} of ${QUESTIONS.length}`}</p>
      )}
    </div>
  );
};

export default Quiz;
