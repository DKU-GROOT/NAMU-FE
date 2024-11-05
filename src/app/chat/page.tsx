"use client";

import axios from "axios";
import React, { useState } from "react";

import ChatArea from "./(components)/chat-area";
import ChatHeader from "./(components)/chat-header";
import MessageInput from "./(components)/messageinput";
import { sendMessageToApi } from "./(services)/chatapi";
import { styles } from "./styles.css";

// 응답 데이터 타입 정의
interface gptResponse {
  code: string;
  message: string;
  answer: string;
}

export default function Home() {
  const [inputId, setInputId] = useState("");
  const [subjectName, setSubjectName] = useState("");
  const [question, setQuestion] = useState("");

  const handleInputId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputId(e.target.value);
  };

  const handleSubjectName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubjectName(e.target.value);
  };

  const handleQuestion = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuestion(e.target.value);
  };

  const onClickLogin = () => {
    if (!inputId || !subjectName || !question) {
      alert("이메일, 과목명, 질문을 입력하세요.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(inputId)) {
      alert("유효한 이메일 주소를 입력하세요.");
      return;
    }

    console.log("click login");
    console.log("ID :", inputId);
    console.log("Subject :", subjectName);
    console.log("Question :", question);

    axios
      .post<gptResponse>("http://localhost:4040/namu/v2/chatroom/ask", {
        email: inputId,
        subjectName: subjectName,
        question: question,
      })
      .then((res) => {
        console.log("서버 응답:", res.data);
        if (res.data.code === "SU") {
          console.log("응답 성공");
          alert(res.data.answer);
        } else {
          console.log("요청 실패:", res.data.message);
          alert(res.data.message || "요청에 실패하였습니다.");
        }
      })
      .catch((error) => {
        console.error("요청 중 네트워크 오류:", error);
        alert("요청 중 네트워크 오류가 발생했습니다.");
      });
  };

  const [chat, setChat] = useState<Array<{ role: string; content: string }>>(
    [],
  );
  const [loading, setLoading] = useState<boolean>(false);

  const handleSendMessage = async (message: string) => {
    if (!message) return;

    const newMessage = { role: "user", content: message };
    setChat((prevChat) => [...prevChat, newMessage]);

    try {
      setLoading(true);

      const botReply = await sendMessageToApi(message);
      setChat((prevChat) => [...prevChat, { role: "bot", content: botReply }]);
    } catch (error) {
      console.error("Error during API call:", error);
      setChat((prevChat) => [
        ...prevChat,
        { role: "bot", content: "응답을 처리하는 중 오류가 발생했습니다." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <ChatHeader />
      <ChatArea chat={chat} loading={loading} />

      {/* 추가된 로그인 입력 필드 및 버튼 */}
      <input
        type="email"
        placeholder="이메일"
        value={inputId}
        onChange={handleInputId}
      />
      <input
        type="text"
        placeholder="과목명"
        value={subjectName}
        onChange={handleSubjectName}
      />
      <input
        type="text"
        placeholder="질문"
        value={question}
        onChange={handleQuestion}
      />
      <button onClick={onClickLogin}>로그인</button>

      <MessageInput onSendMessage={handleSendMessage} loading={loading} />
    </div>
  );
}
