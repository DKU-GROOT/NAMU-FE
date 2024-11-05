"use client";

import axios from "axios";
import React, { useState } from "react";

import { styles } from "./styles.css";
import { handleKakaoLogin, handleNaverLogin } from "./utils/social-auth";

// 응답 데이터 타입 정의
interface LoginResponse {
  code: string;
  message: string;
  token: string;
  expirationTime: number;
  nickname: string;
  point: number;
  treeLevel: number;
  notice: boolean;
}

export default function Home() {
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");

  const handleInputId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputId(e.target.value);
  };

  const handleInputPw = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputPw(e.target.value);
  };

  const onClickLogin = () => {
    if (!inputId || !inputPw) {
      alert("이메일과 비밀번호를 입력하세요.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(inputId)) {
      alert("유효한 이메일 주소를 입력하세요.");
      return;
    }

    console.log("click login");
    console.log("ID :", inputId);
    console.log("PW :", inputPw);

    axios
      .post<LoginResponse>("http://localhost:4040/namu/v2/auth/sign-in", {
        email: inputId,
        password: inputPw,
      })
      .then((res) => {
        console.log("서버 응답:", res.data);
        if (res.data.code == "SU") {
          console.log("로그인 성공");

          sessionStorage.setItem("token", res.data.token);
          sessionStorage.setItem(
            "expirationTime",
            res.data.expirationTime.toString(),
          );

          document.location.href = "/";
        } else {
          console.log("로그인 실패:", res.data.message);
          alert(res.data.message || "로그인에 실패하였습니다.");
        }
      })
      .catch((error) => {
        if (error.response) {
          const { code, message } = error.response.data;
          switch (code) {
            case "VF": {
              alert(message);
              break;
            }
            case "SF": {
              alert(message);
              break;
            }
            case "DBE": {
              alert(message);
              break;
            }
            default: {
              alert("알 수 없는 오류가 발생했습니다.");
            }
          }
        } else {
          console.error("로그인 요청 중 네트워크 오류:", error);
          alert("로그인 요청 중 네트워크 오류가 발생했습니다.");
        }
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <main>
          <section>
            <div>
              <form
                action=""
                method="POST"
                onSubmit={(e) => e.preventDefault()}
              >
                <header>
                  <p className={styles.hStyle}>이메일 로그인</p>
                </header>
                <div className={styles.inputGroup}>
                  <div className={styles.inputWrapper}>
                    <input
                      className={styles.inputStyle}
                      type="email"
                      placeholder="이메일 입력"
                      name="input_id"
                      value={inputId}
                      onChange={handleInputId}
                      required
                    />
                    <input
                      className={styles.inputStyle}
                      type="password"
                      placeholder="비밀번호 입력"
                      name="input_pw"
                      value={inputPw}
                      onChange={handleInputPw}
                      required
                    />
                  </div>
                  <button
                    className={styles.buttonStyle}
                    type="submit"
                    onClick={onClickLogin}
                  >
                    로그인
                  </button>
                </div>
              </form>
            </div>
            <a href="./signup" className={styles.email}>
              이메일 계정으로 회원가입
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
