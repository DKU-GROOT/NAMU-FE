"use client";

import React, { useState } from "react";

import ChatArea from "./(components)/chat-area";
import MessageInput from "./(components)/messageinput";
import { sendMessageToApi } from "./(services)/chatapi";

export default function Home() {
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
    <>
      <ChatArea chat={chat} loading={loading} /> {}
      <MessageInput onSendMessage={handleSendMessage} loading={loading} />
    </>
  );
}
