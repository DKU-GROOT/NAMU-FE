import { styles } from "./styles.css"; // 스타일 가져오기

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.singupBox}>
        <main>
          <section>
            <div>
              <form action="" method="POST">
                <header>
                  <p className={styles.hStyle}>닉네임을 입력해주세요</p>
                </header>

                <div className={styles.inputGroup}>
                  <input
                    className={styles.inputStyle}
                    type="text"
                    placeholder="닉네임 입력"
                    name="nickname"
                    required
                  />
                </div>
                <p className={styles.description}>
                  띄어쓰기, 특수문자를 제외한 8자 이하의 닉네임을 입력해주세요
                </p>
                <div className={styles.divider}></div>
                <button className={styles.buttonStyle} type="submit">
                  가입하기
                </button>
              </form>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
