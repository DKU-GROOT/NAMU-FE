import { ScoreResponse, TestResponse, UserAnswer } from "@/types/test";

export const Test = {
  async generate(subjectName: string) {
    const response = await fetch("http://localhost:4040/namu/v2/study/exam", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: localStorage.getItem("email"),
        subjectName,
      }),
    });
    const data = (await response.json()) as TestResponse;
    return data;
  },
  async score(userAnswer: UserAnswer) {
    const response = await fetch(
      "http://localhost:4040/namu/v2/study/scoring",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userAnswer),
      },
    );
    const data = (await response.json()) as ScoreResponse;
    return data;
  },
};
