"use client";

import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

import { useModalStateStore } from "@/hooks/stores/useModalStateStore";

import Modal from "./modal";
import * as styles from "./styles.css";

export default function ModalProvider({ children }: { children: ReactNode }) {
  const [portalElement, setPortalElement] = useState<HTMLElement | null>(null);
  const {
    modalState: { visible, content, title },
  } = useModalStateStore();

  useEffect(() => {
    setPortalElement(document.querySelector("#modal-root") as HTMLElement);
  }, []);

  return (
    <>
      {children}
      {portalElement &&
        visible &&
        createPortal(
          <div className={styles.wrapper}>
            <Modal title={title} content={content} />
          </div>,
          portalElement!,
        )}
    </>
  );
}
