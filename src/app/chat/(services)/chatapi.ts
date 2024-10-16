import axios from "axios";

export const sendMessageToApi = async (message: string): Promise<string> => {
  try {
    const apiKey = process.env.NEXT_PUBLIC_CHAT_API_KEY;
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: message }],
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
      },
    );

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error("API 호출 중 오류 발생:", error);
    throw new Error("서버 응답에 문제가 있습니다.");
  }
};
