import Image from "next/image";

import PageHeader from "@/components/page-header/page-header";

import SparkleIcon from "../../assets/images/SparkleIcon.png";
import PlanSection from "./(sections)/plan/plan";
import { styles } from "./styles.css";

export default function Page() {
  return (
    <>
      <PageHeader
        title="내 공부"
        desc="나무를 키우며 무한한 성장을 경험해보세요."
      />
      <div className={styles.main}>
        <aside className={styles.treeSection}>
          <div className={styles.treeWrapper} />
          <button className={styles.treeGrowthButton}>
            <span>
              <Image
                className={styles.treeGrowthButtonIcon}
                src={SparkleIcon}
                alt="tree-growth-button-icon"
              />
              <span>나무키우기</span>
            </span>
            <span className={styles.treeGrowthButtonPoint}>150P</span>
          </button>
        </aside>
        <div className={styles.listSection}>
          <PlanSection />
          <section className={styles.planSection} style={{ marginTop: 25 }}>
            <header className={styles.sectionHeader}>
              <h3>공부 목록</h3>
              <div className={styles.buttonContainer}>
                <button>편집</button>
              </div>
            </header>
            <header
              className={styles.sectionHeader}
              style={{ margin: "10px 0" }}
            >
              <select>
                <option>24-1학기</option>
              </select>
              <div className={styles.buttonContainer}>
                <label className={styles.radioButton}>
                  <input
                    type="radio"
                    name="list-mode"
                    style={{ display: "none" }}
                    defaultChecked
                  />
                  공부 중
                </label>
                <label className={styles.radioButton}>
                  <input
                    type="radio"
                    name="list-mode"
                    style={{ display: "none" }}
                  />
                  스크랩
                </label>
              </div>
            </header>
            <ul>
              <li className={styles.studyListItem}>
                <div className={styles.studyListThumbnail} />
                <div className={styles.studyListItemInfo}>
                  <p>컴퓨터 네트워크</p>
                  <p>최근 수강일 24.09.03</p>
                  <div>
                    <span>50</span>
                    <span>27</span>
                  </div>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}
