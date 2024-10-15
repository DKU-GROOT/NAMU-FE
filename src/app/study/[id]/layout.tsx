"use client";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

import HeaderContent from "./(components)/header-content";
import * as styles from "./styles.css";

export default function Layout({
  children,
  params,
}: {
  children: ReactNode;
  params: { id: string };
}) {
  const pathname = usePathname();
  const handleButtonInfoList = () =>
    pathname.includes("test")
      ? [{ name: "나가기", link: "/study/0" }]
      : [
          { name: "학습", link: "" },
          { name: "테스트", link: `${params.id}/test` },
        ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <header className={styles.header}>
          <HeaderContent
            title="컴퓨터 네트워크"
            scrap={10}
            like={20}
            buttonInfoList={handleButtonInfoList()}
          />
        </header>
        {children}
      </div>
    </div>
  );
}
