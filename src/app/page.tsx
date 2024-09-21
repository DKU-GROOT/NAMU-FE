import Layout from "./Layout/Layout";
import { container, loginBox, inputStyle, buttonStyle, socialLogin, googleButton, kakaoButton, naverButton, hStyle, inputGroup, inputWrapper, email, h6Style,divider } from "./loginPageStyle.css"; // 스타일 가져오기

export default function Home() {
  return (
    <Layout>
      <div className={container}>
        <div className={loginBox}>
          <p className={hStyle}>이메일 로그인</p>
          <div className={inputGroup}>
            <div className={inputWrapper}>
              <input className={inputStyle} type="email" placeholder="이메일 입력" />
              <input className={inputStyle} type="password" placeholder="비밀번호 입력" />
            </div>
            <button className={buttonStyle}>로그인</button>
          </div>

          <a href="#" className={email}>이메일 계정으로 회원가입</a>
          
          <div className={divider}></div>

          <p className={hStyle}>소셜 로그인 · 회원가입</p>
          <h6 className={h6Style}>소셜 계정으로 간편하게 로그인과 회원가입을 진행하세요!</h6>
          <div className={socialLogin}>
            <button className={googleButton}>Google 계정</button>
            <button className={kakaoButton}>카카오 계정</button>
            <button className={naverButton}>네이버 계정</button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
