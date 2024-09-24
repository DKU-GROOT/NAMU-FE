import { styles } from "./styles.css"; 

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.contents}>
        <div>
          <p className={styles.listItem}>나무로고</p>
        </div>
        <nav>
          <ul className={styles.navigation}>
            <li className={styles.listItem}>탐색</li>
            <li className={styles.listItem}>토론</li>
            <li className={styles.listItem}>내 공부</li>
            <li className={styles.listItem}>알림</li>
            <li className={styles.listItem}>메뉴</li>
          </ul>
        </nav>
      </div>
      <hr></hr>
    </header>
  );
};

export default Header;
