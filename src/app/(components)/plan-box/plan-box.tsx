import { FaPlus } from "react-icons/fa6";

import { CheckListResponse } from "@/types/check-list";

import * as styles from "./styles.css";

const checkListKeys = [
  "checkList1",
  "checkList2",
  "checkList3",
  "checkList4",
  "checkList5",
] as const;

export default function PlanBox({
  planData,
  enterMode,
}: {
  planData?: CheckListResponse;
  enterMode?: boolean;
}) {
  return (
    <div>
      {/* {enterMode || <p className={styles.date}>{planData.date}</p>} */}
      <div className={styles.container}>
        <ul className={styles.planList}>
          {planData &&
            checkListKeys.map(
              (item, index) =>
                planData[item] && (
                  <li key={index}>
                    <label>
                      <input
                        type="checkbox"
                        checked={planData[`${item}Complete`]}
                      />
                      {planData[item]}
                    </label>
                  </li>
                ),
            )}
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
