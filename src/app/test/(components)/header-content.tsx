import { useRouter } from "next/navigation";
import { GoThumbsup } from "react-icons/go";
import { TfiBook } from "react-icons/tfi";

import { StudyListItemProps } from "@/types/study";

import { button } from "../styles.css";
import * as styles from "./styles.css";

export default function HeaderContent({
  title,
  scrap,
  like,
}: Pick<StudyListItemProps, "title" | "scrap" | "like">) {
  const route = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.studySection}>
        <div className={styles.thumbnail} />
        <div className={styles.infoContainer}>
          <p className={styles.title}>{title}</p>
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
      </div>
      <button
        className={button()}
        onClick={() => {
          route.push("/study/0");
        }}
      >
        나가기
      </button>
    </div>
  );
}
