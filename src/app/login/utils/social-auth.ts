"use client";

import axios from "axios";
import { useEffect } from "react";

interface TokenResponse {
  token: string;
  expiration: number;
}

export const handleKakaoLogin = () => {
  try {
    const kakaoClientId = process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID;
    const kakaoRedirectUri = process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI;

    if (!kakaoClientId || !kakaoRedirectUri) {
      throw new Error("Kakao 환경 변수가 설정되지 않았습니다.");
    }

    window.location.href =
      "https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}&response_type=code";
    //'https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}&response_type=code';
    //'http://localhost:4040/api/v1/auth/oauth2/kakao';
  } catch (error) {
    console.error("카카오 로그인 에러:", error);
  }
};

export const handleNaverLogin = () => {
  try {
    const naverClientId = process.env.NEXT_PUBLIC_NAVER_CLIENT_ID;
    const naverRedirectUri = process.env.NEXT_PUBLIC_NAVER_REDIRECT_URI;

    if (!naverClientId || !naverRedirectUri) {
      throw new Error("Naver 환경 변수가 설정되지 않았습니다.");
    }

    window.location.href = `http://localhost:4040/api/v1/auth/oauth2/naver`;
  } catch (error) {
    console.error("네이버 로그인 에러:", error);
  }
};

const checkTokenExpiration = () => {
  const expirationTime = localStorage.getItem("tokenExpiration");

  if (expirationTime && Date.now() > Number(expirationTime)) {
    console.log("토큰이 만료되었습니다.");
    localStorage.removeItem("token");
    localStorage.removeItem("tokenExpiration");
    return false;
  }

  return true;
};

export const exchangeTokenWithServer = async (
  authCode: string,
  provider: string,
) => {
  try {
    const response = await axios.post<TokenResponse>("/api/v1/auth/sign-in", {
      code: authCode,
      provider: provider,
    });

    const { token, expiration } = response.data;

    // 성공 시 해당 토큰과 만료 시간을 포함해 리다이렉션
    window.location.href = `http://localhost:3000/callback/${token}/${expiration}`;
  } catch (error) {
    console.error(`${provider} 로그인 실패:`, error);
  }
};

// 컴포넌트에서 토큰 만료 체크
export const useTokenExpirationChecker = () => {
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!checkTokenExpiration()) {
        alert("로그인이 만료되었습니다. 다시 로그인해 주세요.");
      }
    }, 60_000);

    return () => clearInterval(intervalId);
  }, []);
};
