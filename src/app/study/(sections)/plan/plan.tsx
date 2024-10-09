"use client";

import useModal from "@/hooks/useModal";

import PlanBox from "../../(components)/plan-box/plan-box";
import { plans } from "../../(components)/plan-box/plans";
import * as common from "../../styles.css";
import { planHistory } from "./plan-history";
import * as styles from "./styles.css";

export default function PlanSection() {
  const { open } = useModal();
  const handlePlanListButtonClick = () => {
    open({
      title: "계획",
      content: planHistory.map((item) => (
        <PlanBox key={item.date} planData={item} />
      )),
    });
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
      <PlanBox planData={plans} enterMode />
    </section>
  );
}
