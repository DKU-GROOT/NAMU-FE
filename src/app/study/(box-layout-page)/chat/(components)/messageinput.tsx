import React, { useState } from "react";

import { styles } from "../styles.css";

interface MessageInputProps {
  onSendMessage: (message: string) => void;
  loading: boolean;
}

const MessageInput: React.FC<MessageInputProps> = ({
  onSendMessage,
  loading,
}) => {
  const [message, setMessage] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleSend = () => {
    if (message.trim() !== "") {
      onSendMessage(message);
      setMessage("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className={styles.messageinputarea}>
      <input
        type="text"
        value={message}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        className={styles.messageinput}
        disabled={loading}
      />
      <button
        onClick={handleSend}
        className={styles.sendmessagebtn}
        disabled={loading}
      >
        <svg
          width="38"
          height="38"
          viewBox="0 0 38 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M35.3312 0.239732L0.927088 20.0818C-0.416416 20.8536 -0.245694 22.7235 1.09039 23.2874L8.98069 26.5969L30.306 7.80852C30.7143 7.44493 31.2932 8.00145 30.9444 8.42442L13.0632 30.2032V36.1767C13.0632 37.9279 15.1786 38.618 16.2178 37.3491L20.9312 31.6131L30.1798 35.4866C31.2339 35.9318 32.4363 35.2714 32.6293 34.136L37.9736 2.07999C38.226 0.58107 36.6153 -0.502306 35.3312 0.239732Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  );
};

export default MessageInput;
