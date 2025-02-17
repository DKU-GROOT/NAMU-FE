"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { InfoIcon } from "@/assets/images/main-info-tag/info-tag-image";
import { shopItem } from "@/assets/images/shop-item";
import SparkleIcon from "@/assets/images/SparkleIcon.png";
import Tree from "@/assets/images/tree-lv2.png";
import Button from "@/components/button/button";
import Modal from "@/components/modal/modal";

import * as styles from "./styles.css";

type InfoTagKey = "level" | "point" | "shop";

export default function TreeSection() {
  const infoTagData = {
    level: { data: "Lv.5", color: "#ECF3BD", link: undefined },
    point: { data: "320 p", color: "#FFF5E2", link: undefined },
    shop: { data: "상점", color: "#ECECEC", link: "/shop" },
  };

  const itemData = [
    { id: "flower", name: "벚꽃", point: 20, canBuy: true },
    { id: "squirrel", name: "다람쥐", point: 20, canBuy: true },
    { id: "apple", name: "사과", point: 20, canBuy: false },
    { id: "puppy", name: "강아지", point: 20, canBuy: false },
  ];

  const [openShopModal, setOpenShopModal] = useState(false);

  useEffect(() => {
    document.querySelector("body")!.style.overflow = openShopModal
      ? "hidden"
      : "auto";
    document.querySelector("html")!.style.overflow = openShopModal
      ? "hidden"
      : "auto";
  }, [openShopModal]);

  return (
    <>
      <aside className={styles.treeSection}>
        <div className={styles.infoTagContainer}>
          {Object.entries(infoTagData).map(([key, tag]) => (
            <button
              key={key}
              className={styles.infoTag}
              style={{ backgroundColor: tag.color }}
              onClick={() => {
                if (key === "shop") {
                  setOpenShopModal(true);
                }
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
      {openShopModal && (
        <Modal
          title="나무 상점"
          content={
            <div>
              <p style={{ fontSize: "12px" }}>Lv.5 달성시 구매 가능합니다.</p>
              <ul className={styles.shopItemList}>
                {itemData.map((item) => (
                  <li key={item.id} className={styles.shopItemWrapper}>
                    <div className={styles.shopItemImageWrapper}>
                      <div
                        className={styles.shopItemImage}
                        style={{
                          backgroundImage: `url('${shopItem[item.id as keyof typeof shopItem].src}')`,
                        }}
                      />
                    </div>
                    <div className={styles.shopItemInfo}>
                      <p>{item.name}</p>
                      <p className={styles.shopItemPoint}>{item.point}P</p>
                    </div>
                    <Button
                      value={item.canBuy ? "구매하기" : "사용하기"}
                      size="fit"
                      style={{ padding: "15px 26px", fontWeight: "bold" }}
                      theme={item.canBuy ? "primary" : "secondary"}
                      onClick={() => {
                        setOpenShopModal(false);
                      }}
                    />
                  </li>
                ))}
              </ul>
            </div>
          }
          setOpen={setOpenShopModal}
        />
      )}
    </>
  );
}
