'use client';
import React from "react";
import style from "./user.module.css";

export default function Header(){

    const MENU = [
        {menuName : "トップページ", href : "/user"},
        {menuName : "新規登録", href : "/user/Register"},
        {menuName : "ログイン", href : "/user/Login"}
    ]
    return (
        <header className={style.header}>
        <h4 className={style.headerLogo}>ユーザー画面</h4>
        <ul className={style.headerMenu}>
        {MENU.map((menu,index) => {
            return (
                    <li className={style.headerList} key={index}><a href={menu.href}>{menu.menuName}</a></li>
                
            );
        })}
        </ul>
        </header>
    );
}