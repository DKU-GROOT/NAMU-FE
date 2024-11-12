import axios from "axios";

import { StudyResponse } from "../../../types/chatgpt";

export const sendMessageToApi = async (
  message: string,
  email: string,
): Promise<string> => {
  try {
    const response = await axios.post<StudyResponse>(
      "http://localhost:4040/namu/v2/study/ask",
      {
        email: email,
        subjectName: "자료구조",
        question: message,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    if (response.data.code === "SU") {
      return response.data.answer;
    } else {
      throw new Error("Error: " + response.data.message);
    }
  } catch (error) {
    console.error("API 호출 중 오류 발생:", error);
    throw new Error("서버 응답에 문제가 있습니다.");
  }
};
