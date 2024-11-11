"use client";

import { container } from "./styles.css";

const fetchPosts = async () => {
  const date = new Date();
  const response = await fetch(
    "http://localhost:4040/namu/v2/check-list/check",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: "gaeunnnleee@gmail.com",
        date: `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`,
        checkList: "운영체제 상호배제 학습",
      }),
    },
  );
  return response.json();
};

export default function Home() {
  return (
    <div className={container}>
      <button onClick={fetchPosts}>버튼</button>
    </div>
  );
}
