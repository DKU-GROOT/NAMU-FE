"use client";

import React, { useEffect, useState } from "react";

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
          <p className={styles.listItem}>나무로고</p>
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
            <li className={styles.listItem}>탐색</li>
            <li className={styles.listItem}>토론</li>
            <li className={styles.listItem}>내 공부</li>
            <li className={styles.listItem}>알림</li>
            <li className={styles.listItem}>메뉴</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
