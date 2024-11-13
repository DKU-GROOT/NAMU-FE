"use client";

import { useEffect, useState } from "react";

import { Test } from "@/api/test";
import useModal from "@/hooks/useModal";
import { UserAnswer } from "@/types/test";

import * as styles from "./styles.css";

interface QuestionList {
  id: number;
  question: string;
}

export default function Page() {
  const [examId, setExamId] = useState<number>();
  const [currentQuestionId, setCurrentQuestionId] = useState(0);
  const [questionList, setQuestionList] = useState<QuestionList[]>();
  const { open } = useModal();
  const [answer, setAnswer] = useState(
    Array.from({ length: 5 }).map((_, index) => ({
      id: index + 1,
      answer: "",
    })),
  );

  const fetchTest = async () => {
    const response = await Test.generate();
    setQuestionList(
      Object.entries(response)
        .slice(4)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .map(([_, question], index) => ({
          id: index + 1,
          question: question ? question.split(/문제 \d+ :/)[1] : question,
        })),
    );
    setExamId(response.examId);
  };

  const scoreTest = async (data: UserAnswer) => {
    const response = await Test.score(data);
    open({
      content: (
        <div className={styles.scoreModal}>
          <h1>✅ 채점 결과</h1>
          <div>
            <h2>{response.result}</h2>
            <h2>점수: {response.score}</h2>
          </div>
        </div>
      ),
    });
  };

  useEffect(() => {
    fetchTest();
  }, []);

  const handleScoreTest = () => {
    // eslint-disable-next-line unicorn/no-array-reduce
    const answers = answer.reduce<{ [key: string]: string }>((acc, item) => {
      acc[`userAnswer${item.id}`] = item.answer;
      return acc;
    }, {});
    const request = { examId, ...answers };
    scoreTest(request as UserAnswer);
  };

  return (
    <div className={styles.content}>
      {questionList ? (
        <>
          <div className={styles.questionContainer}>
            {questionList.map(({ id, question }, index) => (
              <div
                key={id}
                className={styles.questionContent}
                style={{
                  display: index === currentQuestionId ? "" : "none",
                }}
              >
                <p className={styles.questionIndex}>
                  문제 {currentQuestionId + 1}
                </p>
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
                  currentQuestionId > 0 &&
                  setCurrentQuestionId((prev) => prev - 1)
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
              <button onClick={handleScoreTest} className={styles.button()}>
                채점하기
              </button>
            )}
          </aside>
        </>
      ) : (
        <>테스트 생성 중 ...</>
      )}
    </div>
  );
}
