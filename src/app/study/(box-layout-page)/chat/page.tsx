"use client";

import React, { useEffect, useState } from "react";

import { sendMessageToApi } from "@/api/chat";
import ChatArea from "@/app/study/(components)/chat-box/chat-area";
import MessageInput from "@/app/study/(components)/chat-box/messageinput";
//

export default function Home() {
  const [email, setEmail] = useState<string>("");
  const [chat, setChat] = useState<Array<{ role: string; content: string }>>(
    [],
  );
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

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

      const botReply = await sendMessageToApi(email, message);

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

  return (
    <>
      <ChatArea chat={chat} loading={loading} />
      <MessageInput onSendMessage={handleSendMessage} loading={loading} />
    </>
  );
}
