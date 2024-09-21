import { header, contents, navigation, listItem } from "./module.css" // Vanilla Extract 스타일 import

const Header = () => {
  return (
    <header className={header}> {/* header 스타일 적용 */}
      <div className={contents}> {/* contents 스타일 적용 */}
        <div>
            <li className={listItem}>나무로고</li>
        </div>
        <nav>
          <ul className={navigation}> {/* navigation 스타일 적용 */}
            <li className={listItem}>탐색</li>
            <li className={listItem}>토론</li>
            <li className={listItem}>내 공부</li>
            <li className={listItem}>알림</li>
            <li className={listItem}>메뉴</li>
          </ul>
        </nav>
      </div>
      <hr></hr>
    </header>
  );
};

export default Header;
