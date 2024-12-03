import PageHeader from "@/components/page-header/page-header";

import PlanSection from "./(sections)/plan/plan";
import StudyListSection from "./(sections)/study-list/study-list";
import TreeSection from "./(sections)/tree/tree";
import { styles } from "./styles.css";

export default function Page() {
  return (
    <>
      <PageHeader
        title="내 공부"
        desc="나무를 키우며 무한한 성장을 경험해보세요."
      />
      <div className={styles.main}>
        <TreeSection />
        <div className={styles.listSection}>
          <PlanSection />
          <StudyListSection />
        </div>
      </div>
    </>
  );
}
