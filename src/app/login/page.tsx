import { styles } from "./styles.css";
import { handleKakaoLogin, handleNaverLogin } from "./utils/auth";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <main>
          <section>
            <div>
              <form action="" method="POST">
                <header>
                  <p className={styles.hStyle}>이메일 로그인</p>
                </header>
                <div className={styles.inputGroup}>
                  <div className={styles.inputWrapper}>
                    <input
                      className={styles.inputStyle}
                      type="email"
                      placeholder="이메일 입력"
                      name="email"
                      required
                    />
                    <input
                      className={styles.inputStyle}
                      type="password"
                      placeholder="비밀번호 입력"
                      name="password"
                      required
                    />
                  </div>
                  <button className={styles.buttonStyle} type="submit">
                    로그인
                  </button>
                </div>
              </form>
            </div>
            <a href="#" className={styles.email}>
              {" "}
              이메일 계정으로 회원가입{" "}
            </a>

            <div className={styles.divider}></div>

            <header>
              <p className={styles.hStyle}>소셜 로그인 · 회원가입</p>
              <h6 className={styles.h6Style}>
                소셜 계정으로 간편하게 로그인과 회원가입을 진행하세요!
              </h6>
            </header>
            <div className={styles.socialLogin}>
              <button className={styles.googleButton} type="button">
                Google 계정
              </button>
              <button
                className={styles.kakaoButton}
                type="button"
                onClick={handleKakaoLogin}
              >
                카카오 계정
              </button>
              <button
                className={styles.naverButton}
                type="button"
                onClick={handleNaverLogin}
              >
                네이버 계정
              </button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
