import { ReactNode } from "react";
import { create } from "zustand";

type ModalState = {
  modalState: Modal;
  setModalState: (state: Modal) => void;
};

type Modal = {
  visible: boolean;
  title?: string;
  content: ReactNode;
};

export const useModalStateStore = create<ModalState>((set) => ({
  modalState: {
    visible: false,
    title: undefined,
    content: null,
  },
  setModalState: (state: Modal) => set({ modalState: state }),
}));
