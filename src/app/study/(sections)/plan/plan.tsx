"use client";

import { FaPlus } from "react-icons/fa6";

import useModal from "@/hooks/useModal";

import * as common from "../../styles.css";
import * as styles from "./styles.css";

export default function PlanSection() {
  const { open } = useModal();
  const handlePlanListButtonClick = () => {
    open({ content: "test" });
  };
  return (
    <section className={styles.planSection}>
      <header className={common.styles.sectionHeader}>
        <h3>오늘의 계획</h3>
        <div className={styles.buttonContainer}>
          <button onClick={handlePlanListButtonClick}>계획 목록</button>
          <button>편집</button>
        </div>
      </header>
      <ul className={styles.planList}>
        <li>
          <label>
            <input type="checkbox" /> [컴퓨터 네트워크] 네트워크 유형 학습하기
          </label>
        </li>
        <div className={styles.planInputSection}>
          <input
            type="text"
            placeholder="오늘의 계획을 작성해주세요"
            className={styles.planInput}
          />
          <button className={styles.planButton}>
            <FaPlus />
          </button>
        </div>
      </ul>
    </section>
  );
}
