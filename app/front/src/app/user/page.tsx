
import Footer from "../../components/common/Footer";
import Link from "next/link";
import Header from "../../components/user/Header";
export default function UserPage() {
    return (
        <>
        <Header />
        <main>
            <h2>ユーザー機能</h2>
            <p>ユーザー登録、ログインができる機能になります。<br />
            以下のを参照してください。</p>
            <Link href="/user/Register">新規登録はこちらから</Link>
            <Link href="/user/Login">ログインはこちらから</Link>
        </main>
        <Footer />
        </>
    );
}