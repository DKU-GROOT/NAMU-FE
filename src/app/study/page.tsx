import Image from "next/image";

import SparkleIcon from "../../assets/images/SparkleIcon.png";
import { styles } from "./styles.css";

export default function Page() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1>내 공부</h1>
          <p>나무를 키우며 무한한 성장을 경험해보세요.</p>
        </div>
      </header>
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
          <section className={styles.planSection}>
            <header className={styles.sectionHeader}>
              <h3>오늘의 계획</h3>
              <div>
                <button>계획 목록</button>
                <button>편집</button>
              </div>
            </header>
            <ul>
              <li>
                <input type="checkbox" /> [컴퓨터 네트워크] 네트워크 유형
                학습하기
              </li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}
