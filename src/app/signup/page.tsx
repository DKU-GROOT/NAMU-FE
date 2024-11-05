"use client";

import axios from "axios";
import React, { useState } from "react";

import { styles } from "./styles.css";

interface EmailResponse {
  code: string;
  message: string;
}

interface EmailcheckResponse {
  code: string;
  message: string;
}

interface SignupResponse {
  code: string;
  message: string;
}

export default function Home() {
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [certificationNumber, setCertificationNumber] = useState("");
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [verificationStatus, setVerificationStatus] = useState("");
  const [isCertificationVerified, setIsCertificationVerified] = useState(false);

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleCertificationNumberChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setCertificationNumber(e.target.value);
  };

  const sendEmailVerification = () => {
    if (!email) {
      alert("이메일을 입력해주세요.");
      return;
    }
    axios
      .post<EmailResponse>(
        "http://localhost:4040/namu/v2/auth/email-certification",
        { email },
      )
      .then((response) => {
        if (response.status == 200 && response.data.code == "SU") {
          alert("인증 메일이 전송되었습니다.");
          setIsEmailSent(true);
        } else {
          alert(response.data.message || "이메일 전송에 실패했습니다.");
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
            case "DI": {
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
        }
      });
  };

  const verifyCertificationNumber = () => {
    axios
      .post<EmailcheckResponse>(
        "http://localhost:4040/namu/v2/auth/check-certification",
        {
          email,
          certificationNumber,
        },
      )
      .then((res) => {
        if (res.data.code == "SU") {
          setVerificationStatus("인증 성공");
          setIsCertificationVerified(true);
        } else {
          setVerificationStatus("인증 실패: " + res.data.message);
          setIsCertificationVerified(false);
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
            case "CF": {
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
        }
      });
  };

  const handleSignup = () => {
    axios
      .post<SignupResponse>("http://localhost:4040/namu/v2/auth/sign-up", {
        email,
        password,
        certificationNumber,
        nickname,
      })
      .then((response) => {
        if (response.data.code === "SU") {
          alert("회원가입이 성공적으로 완료되었습니다.");
        } else {
          alert("회원가입 실패: " + response.data.message);
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
            case "CF": {
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
        }
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.singupBox}>
        <main>
          <section>
            <div>
              <form
                action=""
                method="POST"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSignup();
                }}
              >
                <header>
                  <p className={styles.hStyle}>회원 정보를 입력해주세요</p>
                </header>

                <div className={styles.inputGroup}>
                  <div className={styles.emailWrapper}>
                    <input
                      className={styles.inputStyle}
                      type="email"
                      placeholder="이메일을 입력"
                      name="email"
                      value={email}
                      onChange={handleEmailChange}
                      required
                    />
                    <button
                      type="button"
                      className={styles.sendButton}
                      onClick={sendEmailVerification}
                      disabled={isEmailSent}
                    >
                      {isEmailSent ? "전송 완료" : "이메일 전송"}
                    </button>
                  </div>

                  <input
                    className={styles.inputStyle}
                    type="password"
                    placeholder="비밀번호를 입력해주세요"
                    name="password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                  />

                  <input
                    className={styles.inputStyle}
                    type="text"
                    placeholder="이메일 인증번호를 입력해주세요."
                    name="verificationCode"
                    value={certificationNumber}
                    onChange={handleCertificationNumberChange}
                    required
                  />
                  <input
                    className={styles.inputStyle}
                    type="text"
                    placeholder="닉네임을 입력해주세요"
                    name="nickname"
                    value={nickname}
                    onChange={handleNicknameChange}
                    required
                  />
                  <input
                    className={styles.buttonStyle}
                    type="button"
                    onClick={verifyCertificationNumber}
                    value="인증 확인"
                  />
                  {verificationStatus && <p>{verificationStatus}</p>}
                </div>
                <p className={styles.description}>
                  띄어쓰기, 특수문자를 제외한 8자 이하의 닉네임을 입력해주세요.{" "}
                  <br />
                  영숫자, 길이 8 ~ 13자 이하의 패스워드를 입력해주세요.
                </p>
                <div className={styles.divider}></div>
                <button
                  className={styles.buttonStyle}
                  type="submit"
                  disabled={!isCertificationVerified}
                >
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
