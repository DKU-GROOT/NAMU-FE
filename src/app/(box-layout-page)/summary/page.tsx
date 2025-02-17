"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { Summary } from "@/api/summary";
import { SummaryResponse } from "@/types/summary";

import { styles as layoutStyles } from "../chat/styles.css";
import * as styles from "./styles.css";

export default function Page() {
  const [summary, setSummary] = useState<SummaryResponse>();
  const params = useSearchParams();

  const fetchSummary = async () => {
    const subjectName = params.get("subjectName");

    if (!subjectName) return;

    const response = await Summary.getResult(subjectName);
    setSummary(response);
  };
  useEffect(() => {
    fetchSummary();
  }, []);

  return (
    <div className={layoutStyles.summaryArea}>
      {summary ? (
        <>
          <h1 className={styles.title}>요약</h1>
          <p className={styles.content}>{summary.summary}</p>
        </>
      ) : (
        <h1 className={styles.title}>학습 내용 요약 중 ...</h1>
      )}
    </div>
  );
}
