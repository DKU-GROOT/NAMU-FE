import { styles } from "./styles.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.menunbox}>
        <div className={styles.alarmbox}>
          <p className={styles.textstyle}>알림</p>
          <label htmlFor="toggle_slide" className={styles.label}>
            <input
              type="checkbox"
              id="toggle_slide"
              className={styles.toggle_slide}
            />
            <span className={styles.toggle}></span>
          </label>
        </div>

        <div className={styles.inquirybox}>
          <p className={styles.textstyle}>문의</p>

          <div className={styles.inquiryitem}>
            <p className={styles.textstyle}>문의 내역</p>
            <a href="#" className={styles.arrow}>
              <p className={styles.textstyle}>&gt;</p>
            </a>
          </div>

          <div className={styles.inquiryitem}>
            <p className={styles.textstyle}>문의 등록</p>
            <a href="#" className={styles.arrow}>
              <p className={styles.textstyle}>&gt;</p>
            </a>
          </div>
        </div>

        <div className={styles.actionButtons}>
          <button className={styles.deleteButton}>회원 탈퇴</button>
          <button className={styles.logoutButton}>로그아웃</button>
        </div>
      </div>
      <button className={styles.floatingButton}>+</button>
    </div>
  );
}
