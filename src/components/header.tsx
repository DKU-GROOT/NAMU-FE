"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import Logo from "@/assets/images/logo.png";

import { styles } from "./styles.css";

const handleLogin = () => {
  window.location.href = "/login";
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const email = localStorage.getItem("email");
    setIsLoggedIn(!!email);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    window.location.href = "/";
  };

  return (
    <header className={styles.header}>
      <div className={styles.contents}>
        <div>
          <Link href="/">
            <Image
              src={Logo.src}
              width={100}
              height={100}
              alt=""
              style={{ marginTop: "-10px" }}
            />
          </Link>
        </div>
        <nav>
          <ul className={styles.navigation}>
            <li className={styles.listItem}>
              {isLoggedIn ? (
                <button onClick={handleLogout} className={styles.button}>
                  로그아웃
                </button>
              ) : (
                <button onClick={handleLogin} className={styles.button}>
                  로그인
                </button>
              )}
            </li>
            {/* <li className={styles.listItem}>내 공부</li>
            <li className={styles.listItem}>탐색</li>
            <li className={styles.listItem}>토론</li>
            <li className={styles.listItem}>알림</li> */}
            <li className={styles.listItem}>
              <a href="./menu">메뉴</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
