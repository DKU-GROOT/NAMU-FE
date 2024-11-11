"use client";

import { useEffect, useState } from "react";

import { CheckList } from "@/api/check-list";
import useModal from "@/hooks/useModal";
import { CheckListResponse } from "@/types/check-list";

import PlanBox from "../../(components)/plan-box/plan-box";
import * as common from "../../styles.css";
import { planHistory } from "./plan-history";
import * as styles from "./styles.css";

export default function PlanSection() {
  const { open } = useModal();
  const [checkList, setCheckList] = useState<CheckListResponse>();

  const handlePlanListButtonClick = () => {
    open({
      title: "계획",
      content: planHistory.map((item) => (
        <>
          계획
          <PlanBox key={item.date} planData={undefined} />
        </>
      )),
    });
  };

  const fetchCheckList = async () => {
    const data = await CheckList.getList();
    setCheckList(data);
  };

  useEffect(() => {
    fetchCheckList();
  }, []);

  return (
    <section className={styles.planSection}>
      <header className={common.styles.sectionHeader}>
        <h3>오늘의 계획</h3>
        <div className={styles.buttonContainer}>
          <button onClick={handlePlanListButtonClick}>계획 목록</button>
          <button onClick={fetchCheckList}>편집</button>
        </div>
      </header>
      <PlanBox planData={checkList} enterMode />
    </section>
  );
}
