import { motion } from "framer-motion";
import { ReactNode, SetStateAction } from "react";
import { RxCross2 } from "react-icons/rx";

import useModal from "@/hooks/useModal";

import Button from "../button/button";
import * as styles from "./styles.css";

export default function Modal({
  title,
  content,
  setOpen,
}: {
  title?: string;
  content: ReactNode;
  setOpen?: React.Dispatch<SetStateAction<boolean>>;
}) {
  const { close } = useModal();
  const handleCloseButtonClick = () => {
    if (setOpen) {
      setOpen(false);
    } else {
      close();
    }
  };

  return (
    <div className={styles.wrapper}>
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.75,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: {
            ease: "easeOut",
            duration: 0.15,
          },
        }}
        exit={{
          opacity: 0,
          scale: 0.75,
          transition: {
            ease: "easeIn",
            duration: 0.15,
          },
        }}
        className={styles.container}
      >
        <div className={styles.header}>
          <p className={styles.title}>{title}</p>
          <button
            className={styles.crossButton}
            onClick={handleCloseButtonClick}
          >
            <RxCross2 />
          </button>
        </div>
        <div className={styles.content}>{content}</div>
        <Button value="닫기" onClick={handleCloseButtonClick} />
      </motion.div>
    </div>
  );
}
