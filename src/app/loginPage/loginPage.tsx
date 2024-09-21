import Layout from "../Layout/Layout";
import { container, loginBox, inputStyle, buttonStyle, socialLogin, googleButton, kakaoButton, naverButton } from "./loginPageStyle.css"; // 스타일 가져오기

export default function Home() {
  return (
    <Layout>
      <div className={container}>
        <div className={loginBox}>
          <h2>이메일 로그인</h2>
          <input className={inputStyle} type="email" placeholder="이메일 입력" />
          <input className={inputStyle} type="password" placeholder="비밀번호 입력" />
          <button className={buttonStyle}>로그인</button>
          <a href="#">이메일 계정으로 회원가입</a>

          <h3>소셜 로그인 · 회원가입</h3>
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
