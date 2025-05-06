import { Login } from "../../../portfolio/user/Login";
import Link from "next/link";


export default function LoginPage() {
    return (
        <>
        <Login />
        <Link href="/user"><button>戻る</button></Link>
        </>
    );
}