import { ReactNode } from "react";

import { useModalStateStore } from "./stores/useModalStateStore";

export default function useModal() {
  const { setModalState } = useModalStateStore();

  const open = ({ title, content }: { title?: string; content: ReactNode }) => {
    setModalState({ visible: true, content, title });
  };

  const close = () => {
    setModalState({ visible: false, content: null, title: undefined });
  };

  return { open, close };
}
