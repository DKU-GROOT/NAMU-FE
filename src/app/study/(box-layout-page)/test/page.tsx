"use client";

import { useState } from "react";

import { questionList } from "@/mocks/question-list";

import * as styles from "./styles.css";

export default function Page() {
  const [currentQuestionId, setCurrentQuestionId] = useState(0);
  const [answer, setAnswer] = useState(
    Array.from({ length: questionList.length }).map((_, index) => ({
      id: index,
      answer: "",
    })),
  );

  return (
    <div className={styles.content}>
      <div className={styles.questionContainer}>
        {questionList.map(({ id, question }, index) => (
          <div
            key={id}
            className={styles.questionContent}
            style={{
              display: index === currentQuestionId ? "" : "none",
            }}
          >
            <p className={styles.questionIndex}>문제 {currentQuestionId + 1}</p>
            <p className={styles.question}>{question}</p>
            <input
              type="text"
              className={styles.answerInput}
              value={answer[index].answer}
              onChange={(e) => {
                setAnswer(
                  answer.map((originAnswer, answerIndex) =>
                    answerIndex === index
                      ? { ...originAnswer, answer: e.target.value }
                      : originAnswer,
                  ),
                );
              }}
            />
          </div>
        ))}
        <div className={styles.buttonContainer}>
          <button
            className={styles.button()}
            onClick={() =>
              currentQuestionId > 0 && setCurrentQuestionId((prev) => prev - 1)
            }
          >
            이전
          </button>
          <button
            className={styles.button()}
            onClick={() =>
              currentQuestionId < questionList.length - 1 &&
              setCurrentQuestionId((prev) => prev + 1)
            }
          >
            다음
          </button>
        </div>
      </div>
      <aside className={styles.aside}>
        <div className={styles.questionIndexList}>
          {questionList.map((_, index) => (
            <button
              key={`question-button-${index}`}
              className={styles.questionIndexButton({
                isActive: index === currentQuestionId,
              })}
              onClick={() => {
                setCurrentQuestionId(index);
              }}
            >
              문제{index + 1}
            </button>
          ))}
        </div>
        {currentQuestionId === questionList.length - 1 && (
          <button className={styles.button()}>채점하기</button>
        )}
      </aside>
    </div>
  );
}
