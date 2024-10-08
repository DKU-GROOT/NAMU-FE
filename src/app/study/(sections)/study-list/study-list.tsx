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
      <ul>
        <li className={styles.studyListItem}>
          <div className={styles.studyListThumbnail} />
          <div className={styles.studyListItemInfo}>
            <p>컴퓨터 네트워크</p>
            <p>최근 수강일 24.09.03</p>
            <div>
              <span>50</span>
              <span>27</span>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
}
