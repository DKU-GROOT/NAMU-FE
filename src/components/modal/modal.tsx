import { ReactNode } from "react";
import { RxCross2 } from "react-icons/rx";

import useModal from "@/hooks/useModal";

import Button from "../button/button";
import * as styles from "./styles.css";

export default function Modal({
  title,
  content,
}: {
  title?: string;
  content: ReactNode;
}) {
  const { close } = useModal();
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.title}>{title}</p>
        <button className={styles.crossButton} onClick={close}>
          <RxCross2 />
        </button>
      </div>
      <div className={styles.content}>{content}</div>
      <Button value="닫기" onClick={close} />
    </div>
  );
}
