import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  MouseEvent,
  SetStateAction,
  useState,
} from "react";
import { FaPlus } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

import { CheckList } from "@/api/check-list";
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
  updateCheckList,
}: {
  planData?: CheckListResponse;
  enterMode?: boolean;
  updateCheckList: Dispatch<SetStateAction<CheckListResponse | undefined>>;
}) {
  const [planInputValue, setPlanInputValue] = useState("");

  const handleClickCheckListItem = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    CheckList.check(Number(value)).then(() => refetchCheckList());
  };

  const handleDeleteButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    const { value } = e.currentTarget;
    CheckList.delete(Number(value)).then(() => refetchCheckList());
  };

  const handlePlanEnter = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!planData?.checkList5) {
      CheckList.add(planInputValue).then(() => {
        refetchCheckList();
        setPlanInputValue("");
      });
      return;
    }
    alert("계획은 5개까지 입력 가능합니다.");
  };
  const refetchCheckList = async () => {
    const data = await CheckList.getList();
    updateCheckList(data);
  };

  return (
    <div>
      {/* {enterMode || <p className={styles.date}>{planData.date}</p>} */}
      <div className={styles.container}>
        <ul className={styles.planList}>
          {planData &&
            checkListKeys.map(
              (item, index) =>
                planData[item] && (
                  <li key={index} className={styles.planItem}>
                    <label>
                      <input
                        type="checkbox"
                        checked={planData[`${item}Complete`]}
                        onChange={handleClickCheckListItem}
                        value={index + 1}
                      />
                      &nbsp;{planData[item]}
                    </label>
                    <button onClick={handleDeleteButtonClick} value={index + 1}>
                      <RxCross2 />
                    </button>
                  </li>
                ),
            )}
        </ul>
        {enterMode && (
          <form className={styles.planInputSection} onSubmit={handlePlanEnter}>
            <input
              type="text"
              placeholder="오늘의 계획을 작성해주세요"
              className={styles.planInput}
              value={planInputValue}
              onChange={(e) => {
                setPlanInputValue(e.target.value);
              }}
            />
            <label className={styles.planButton}>
              <input type="submit" style={{ visibility: "hidden" }} />
              <FaPlus />
            </label>
          </form>
        )}
      </div>
    </div>
  );
}
