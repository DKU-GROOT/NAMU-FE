import { StudyResponse } from "@/types/chatgpt";

export const sendMessageToApi = async (
  email: string,
  message: string,
): Promise<string> => {
  try {
    const response = await fetch("http://localhost:4040/namu/v2/study/ask", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        subjectName: "자료구조",
        question: message,
      }),
    });

    if (!response.ok) {
      throw new Error(`API 요청 실패: 상태 코드 ${response.status}`);
    }
    const data: StudyResponse = await response.json();
    return data.answer;
  } catch (error) {
    console.error("API 호출 중 오류 발생:", error);
    throw new Error("서버 응답에 문제가 있습니다.");
  }
};
