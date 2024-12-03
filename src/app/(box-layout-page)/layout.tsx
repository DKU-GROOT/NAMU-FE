"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

import HeaderContent from "./(components)/header-content";
import * as styles from "./styles.css";

export default function Layout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const params = useSearchParams();
  const [studyId, setStudyId] = useState<number>();
  const [subjectName, setSubjectName] = useState("");

  useEffect(() => {
    setStudyId(Number(params.get("id")));
    setSubjectName(params.get("subjectName") ?? "");
  }, [params]);

  const handleButtonInfoList = () => {
    const split = pathname.split(`/study/`);
    const page = split.at(-1);
    const content = {
      test: [
        {
          name: "나가기",
          link: `/study`,
        },
      ],
      chat: [
        {
          name: "학습 종료",
          link: `/study/summary?id=${studyId}&subjectName=${subjectName}`,
        },
      ],
      summary: [
        {
          name: "테스트",
          link: `/study/test?id=${studyId}&subjectName=${subjectName}`,
        },
        { name: "나가기", link: `/study` },
      ],
    };
    return (
      content[page as keyof typeof content] ?? [
        {
          name: "학습",
          link: `/study/chat?id=${page}&subjectName=${subjectName}`,
        },
        {
          name: "테스트",
          link: `/study/test?id=${page}&subjectName=${subjectName}`,
        },
      ]
    );
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <header className={styles.header}>
          <HeaderContent
            title={params.get("subjectName") ?? ""}
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
