"use client";

import React, { useEffect, useState } from "react";

import ChatArea from "./(components)/chat-area";
import MessageInput from "./(components)/messageinput";
import { sendMessageToApi } from "./(services)/chatapi";
import { styles } from "./styles.css";

export default function Home() {
  const [email, setEmail] = useState<string>(""); // 이메일 상태 관리
  const [chat, setChat] = useState<Array<{ role: string; content: string }>>(
    [],
  ); // 채팅 기록
  const [loading, setLoading] = useState<boolean>(false); // 로딩 상태

  // 컴포넌트가 마운트될 때 로컬 저장소에서 이메일 불러오기
  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    if (storedEmail) {
      setEmail(storedEmail); // 로컬 저장소에서 이메일을 가져와 상태 설정
    }
  }, []);

  // 이메일 상태 확인용 useEffect
  useEffect(() => {
    console.log("초기 이메일 상태:", email);
  }, [email]);

  const handleSendMessage = async (message: string) => {
    if (!message) return;

    const newMessage = { role: "user", content: message };
    setChat((prevChat) => [...prevChat, newMessage]);

    try {
      setLoading(true);
      console.log("handleSendMessage 함수 내 이메일 상태:", email);

      const botReply = await sendMessageToApi(message, email); // API 호출

      setChat((prevChat) => [...prevChat, { role: "bot", content: botReply }]);
    } catch (error) {
      console.error("API 호출 중 오류 발생:", error);
      setChat((prevChat) => [
        ...prevChat,
        { role: "bot", content: "응답을 처리하는 중 오류가 발생했습니다." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const checkEmail = () => {
    console.log("버튼 클릭으로 확인된 이메일 상태:", email);
    alert(`현재 이메일 상태: ${email}`);
  };

  return (
    <>
      <ChatArea chat={chat} loading={loading} />
      <MessageInput onSendMessage={handleSendMessage} loading={loading} />
      <button onClick={checkEmail} className={styles.checkEmailButton}>
        이메일 상태 확인
      </button>
    </>
  );
}
