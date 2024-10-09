import StudyListItem from "@/components/study-list-item/study-list-item";
import { studyList } from "@/mocks/study-list";

import * as common from "../../styles.css";
import * as styles from "./styles.css";

export default function StudyListSection() {
  return (
    <section className={styles.planSection} style={{ marginTop: 25 }}>
      <header className={common.styles.sectionHeader}>
        <h3>공부 목록</h3>
        <div className={common.styles.buttonContainer}>
          <button>편집</button>
        </div>
      </header>
      <header
        className={common.styles.sectionHeader}
        style={{ margin: "10px 0" }}
      >
        <select>
          <option>24-1학기</option>
        </select>
        <div className={common.styles.buttonContainer}>
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
            <input type="radio" name="list-mode" style={{ display: "none" }} />
            스크랩
          </label>
        </div>
      </header>
      <ul className={styles.studyListContainer}>
        {studyList.map((props) => (
          <StudyListItem key={props.id} {...props} />
        ))}
      </ul>
    </section>
  );
}
