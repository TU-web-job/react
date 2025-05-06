import React from "react";
import Link from "next/link";

const Header = () => (
    <header>
        <nav>
            <Link href="/">ホーム</Link>
            <Link href="/user">ユーザー</Link>
            <Link href="/reserve">予約</Link>
            <Link href="/event">イベント</Link>
        </nav>
    </header>
);

export default Header;