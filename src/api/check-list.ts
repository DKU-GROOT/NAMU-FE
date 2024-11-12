import { CheckListResponse } from "@/types/check-list";

export const CheckList = {
  async getList() {
    // const date = new Date();
    const response = await fetch(
      "http://localhost:4040/namu/v2/check-list/check",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: "gaeunnnleee@gmail.com",
          // date: `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`,
          date: `2024-11-11`,
          checkList: "운영체제 상호배제 학습",
        }),
      },
    );
    const data = (await response.json()) as CheckListResponse;
    return data;
  },
};
