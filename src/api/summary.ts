import { SummaryResponse } from "@/types/summary";

export const Summary = {
  async getResult() {
    const response = await fetch(
      "http://localhost:4040/namu/v2/study/summary",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: "gaeunnnleee@gmail.com",
          subjectName: "네트워크",
        }),
      },
    );
    const data = (await response.json()) as SummaryResponse;
    return data;
  },
};