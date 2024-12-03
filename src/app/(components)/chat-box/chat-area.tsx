import React from "react";

import { styles } from "../../(box-layout-page)/chat/styles.css";

interface ChatAreaProps {
  chat: Array<{ role: string; content: string }>;
  loading: boolean;
}

const ChatArea: React.FC<ChatAreaProps> = ({ chat, loading }) => {
  return (
    <div className={styles.chatarea}>
      {chat.map((msg, index) => (
        <div
          key={index}
          className={
            msg.role === "user" ? styles.usermessage : styles.botmessage
          }
        >
          <div className={styles.messagecontent}>{msg.content}</div>
        </div>
      ))}
      {loading && (
        <div className={styles.loadingmessage}>응답을 기다리고 있습니다...</div>
      )}
    </div>
  );
};

export default ChatArea;
