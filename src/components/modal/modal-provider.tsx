"use client";

import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

import { useModalStateStore } from "@/hooks/stores/useModalStateStore";

import Modal from "./modal";

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
        createPortal(<Modal title={title} content={content} />, portalElement!)}
    </>
  );
}
