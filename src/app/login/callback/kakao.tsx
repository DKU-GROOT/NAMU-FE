import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";

const KakaoCallback = () => {
  const router = useRouter();
  const { code } = router.query;

  useEffect(() => {
    const exchangeToken = async () => {
      if (code) {
        try {
          await axios.post("/api/v1/auth/sign-in", {
            code: code,
            provider: "kakao",
          });
          router.push("/");
        } catch (error) {
          console.error("로그인 실패:", error);
        }
      }
    };

    exchangeToken();
  }, [code, router]);

  return <div>로그인 중...</div>;
};

export default KakaoCallback;
