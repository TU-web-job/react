'use client';
import Link from 'next/link';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import {useEffect, useState} from 'react';
import { getHelloMessage } from '../lib/api';

export default function Home() {
    return (
        <>
        <Header />
        <main>
            <h1>ポートフォリオへようこそ</h1>
            <div>
                <Link href="/user"><button>ユーザー管理画面</button></Link>
                <p>ユーザーの登録、ログイン、ユーザー詳細照会画面です。</p>

                <Link href="/reserve"><button>予約</button></Link>
                <p>予約登録、確認画面です</p>

                <Link href="/event"><button>イベント</button></Link>
                <p>イベントカウントダウン、確認画面です</p>
            </div>
        </main>
        <Footer />
        </>
    )
}