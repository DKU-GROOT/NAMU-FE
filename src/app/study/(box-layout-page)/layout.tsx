"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

import HeaderContent from "./(components)/header-content";
import * as styles from "./styles.css";

export default function Layout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const params = useSearchParams();
  const [studyId, setStudyId] = useState<number>();

  useEffect(() => {
    setStudyId(Number(params.get("id")));
  }, [params]);

  const handleButtonInfoList = () => {
    const split = pathname.split(`/study/`);
    const page = split.at(-1);
    const content = {
      test: [
        {
          name: "나가기",
          link: `/study/${studyId}`,
        },
      ],
      chat: [{ name: "학습 종료", link: `/study/summary?id=${studyId}` }],
      summary: [
        { name: "테스트", link: `/study/test?id=${studyId}` },
        { name: "나가기", link: `/study/${studyId}` },
      ],
    };
    return (
      content[page as keyof typeof content] ?? [
        { name: "학습", link: `/study/chat?id=${page}` },
        { name: "테스트", link: `/study/test?id=${page}` },
      ]
    );
  };

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
