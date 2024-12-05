import { CheckListResponse } from "@/types/check-list";
import { formatDate } from "@/utils/formatDate";
import { getID } from "@/utils/getID";

export const CheckList = {
  async getList() {
    const date = new Date();
    const response = await fetch(
      "http://localhost:4040/namu/v2/check-list/check",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: getID(),
          date: formatDate(date),
        }),
      },
    );
    const data = (await response.json()) as CheckListResponse;
    return data;
  },
  async check(num: number) {
    const date = new Date();
    const response = await fetch(
      "http://localhost:4040/namu/v2/check-list/complete",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: getID(),
          date: formatDate(date),
          num,
        }),
      },
    );
    const data = (await response.json()) as CheckListResponse;
    return data;
  },
  async delete(num: number) {
    const date = new Date();
    const response = await fetch(
      "http://localhost:4040/namu/v2/check-list/delete",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: getID(),
          date: formatDate(date),
          num,
        }),
      },
    );
    const data = (await response.json()) as CheckListResponse;
    return data;
  },
  async add(content: string) {
    const date = new Date();
    const response = await fetch(
      "http://localhost:4040/namu/v2/check-list/add",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: getID(),
          date: formatDate(date),
          checkList: content,
        }),
      },
    );
    const data = (await response.json()) as CheckListResponse;
    return data;
  },
};
