import React from "react";

import { styles } from "../styles.css";

const ChatHeader = () => {
  return (
    <header className={styles.chatheader}>
      <div className={styles.subjectinfo}>
        <h2 className={styles.h2style}>컴퓨터 네트워크</h2>
        <div className={styles.subjectmeta}>
          <span>👍 50</span>
          <span>💬 27</span>
        </div>
      </div>
      <button className={styles.endstudybtn}>학습 종료</button>
    </header>
  );
};

export default ChatHeader;

/* Travel&Places/globe with meridians */
