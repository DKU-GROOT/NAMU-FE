import { FaPlus } from "react-icons/fa6";

import { PlanData } from "@/types/plan";

import * as styles from "./styles.css";

export default function PlanBox({
  planData,
  enterMode,
}: {
  planData: PlanData;
  enterMode?: boolean;
}) {
  return (
    <div>
      {enterMode || <p className={styles.date}>{planData.date}</p>}
      <div className={styles.container}>
        <ul className={styles.planList}>
          {planData.list.map(({ id, content, checked }) => (
            <li key={id}>
              <label>
                <input type="checkbox" checked={checked} /> {content}
              </label>
            </li>
          ))}
        </ul>
        {enterMode && (
          <div className={styles.planInputSection}>
            <input
              type="text"
              placeholder="오늘의 계획을 작성해주세요"
              className={styles.planInput}
            />
            <button className={styles.planButton}>
              <FaPlus />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
