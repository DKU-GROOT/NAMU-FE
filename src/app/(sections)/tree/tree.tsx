import Image from "next/image";

import SparkleIcon from "@/assets/images/SparkleIcon.png";

import * as styles from "./styles.css";

export default function TreeSection() {
  return (
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
  );
}
