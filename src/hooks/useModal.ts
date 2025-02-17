import { ReactNode } from "react";

import { useModalStateStore } from "./stores/useModalStateStore";

export default function useModal() {
  const { setModalState } = useModalStateStore();

  const open = ({ title, content }: { title?: string; content: ReactNode }) => {
    setModalState({ visible: true, content, title });
    document.querySelector("body")!.style.overflow = "hidden";
    document.querySelector("html")!.style.overflow = "hidden";
  };

  const close = () => {
    setModalState({ visible: false, content: null, title: undefined });
    document.querySelector("body")!.style.overflow = "auto";
    document.querySelector("html")!.style.overflow = "auto";
  };

  return { open, close };
}
