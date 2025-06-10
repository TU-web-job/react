import Link from "next/link";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";

export default function ReservePage(){
    return(
        <>
        <Header />
        <main>
            <h2>予約管理サイト</h2>
            <p>予約登録、予約一覧表示ができる機能です。</p>
            <Link href="/reserve/UserConfig">ユーザー登録</Link>
            <Link href="/reserve/Config">予約登録</Link>
            <Link href="/reserve/List">予約一覧</Link>
        </main>
        <Footer />
        </>
    );
}