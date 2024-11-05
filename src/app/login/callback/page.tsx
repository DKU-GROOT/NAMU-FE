// src/app/auth/oauth-response/[token]/[expiration]/page.tsx
"use client";

import { useRouter } from "next/router";
import { useEffect } from "react";

const OauthResponsePage = ({
  params,
}: {
  params: { token: string; expiration: string };
}) => {
  const router = useRouter();

  useEffect(() => {
    const { token, expiration } = params;

    if (token && expiration) {
      // 로컬 스토리지에 토큰과 만료 시간을 저장
      localStorage.setItem("token", token);

      const expirationTime = Date.now() + Number(expiration) * 1000;
      localStorage.setItem("tokenExpiration", expirationTime.toString());

      console.log("토큰과 만료 시간 저장 완료");

      // 홈 페이지 또는 원하는 페이지로 리다이렉트
      router.push("/");
    } else {
      console.error("토큰 또는 만료 시간이 없습니다.");
    }
  }, [params, router]);

  return (
    <div>
      <h1>로그인 처리 중...</h1>
    </div>
  );
};

export default OauthResponsePage;
