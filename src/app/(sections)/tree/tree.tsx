"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { InfoIcon } from "@/assets/images/main-info-tag/info-tag-image";
import SparkleIcon from "@/assets/images/SparkleIcon.png";
import Tree from "@/assets/images/tree-lv2.png";

import * as styles from "./styles.css";

type InfoTagKey = "level" | "point" | "shop";

export default function TreeSection() {
  const route = useRouter();
  const infoTagData = {
    level: { data: "Lv.5", color: "#ECF3BD", link: undefined },
    point: { data: "320 p", color: "#FFF5E2", link: undefined },
    shop: { data: "상점", color: "#ECECEC", link: "/shop" },
  };

  return (
    <aside className={styles.treeSection}>
      <div className={styles.infoTagContainer}>
        {Object.entries(infoTagData).map(([key, tag]) => (
          <button
            key={key}
            className={styles.infoTag}
            style={{ backgroundColor: tag.color }}
            onClick={() => {
              route.push(tag.link ?? "");
            }}
          >
            <Image
              className={styles.treeGrowthButtonIcon}
              src={InfoIcon[key as InfoTagKey]}
              alt="tree-growth-button-icon"
            />
            <span>{tag.data}</span>
          </button>
        ))}
      </div>
      <div className={styles.treeWrapper}>
        <Image
          src={Tree.src}
          width={Tree.width}
          height={Tree.height}
          alt="tree"
        />
      </div>
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
