import Link from "next/link";
import { GoThumbsup } from "react-icons/go";
import { TfiBook } from "react-icons/tfi";

import { StudyListItemProps } from "@/types/study";

import * as styles from "./styles.css";

export default function StudyListItem({
  id,
  title,
  date,
  scrap,
  like,
}: StudyListItemProps) {
  return (
    <Link
      href={`/study/chat?id=${id}&subjectName=${title}`}
      className={styles.studyListItem}
    >
      <div className={styles.studyListThumbnail} />
      <div className={styles.studyListItemInfo}>
        <p className={styles.title}>{title}</p>
        <p className={styles.date}>최근 수강일 {date}</p>
        <div className={styles.info}>
          <span>
            <GoThumbsup />
            {like}
          </span>
          <span>|</span>
          <span>
            <TfiBook />
            {scrap}
          </span>
        </div>
      </div>
    </Link>
  );
}
