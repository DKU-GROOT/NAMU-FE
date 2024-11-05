"use client";

import axios from "axios";

interface TokenResponse {
  token: string;
}

export const handleKakaoLogin = () => {
  try {
    window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}&response_type=code`;
  } catch (error) {
    console.error("카카오 로그인 에러:", error);
  }
};

export const handleNaverLogin = () => {
  try {
    window.location.href = `https://nid.naver.com/oauth2.0/authorize?client_id=${process.env.NEXT_PUBLIC_NAVER_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_NAVER_REDIRECT_URI}&response_type=code&state=RANDOM_STATE_STRING`;
  } catch (error) {
    console.error("네이버 로그인 에러:", error);
  }
};

export const exchangeTokenWithServer = async (
  authCode: string,
  provider: string,
) => {
  try {
    const response = await axios.post<TokenResponse>(
      "/api/v1/auth/social-login",
      {
        code: authCode,
        provider: provider,
      },
    );

    const { token } = response.data;
    localStorage.setItem("token", token);
  } catch (error) {
    console.error(`${provider} 로그인 실패:`, error);
  }
};
