'use client';
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import style from "./user.module.css";

type FormValues = {
    email: string;
    password: string;
}
function Login() {

    const {register, handleSubmit, formState: { errors } } = useForm<FormValues>();

    const onSubmit = async (data: FormValues) => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/login`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        });
        const result = await res.json();
        alert(result.message);
        router.push('/user/Result');
    };

    const router = useRouter();
    return(
        <>
        <h3>ログイン</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                <label>メールアドレス : </label>
                <input {...register("email")} type="text" placeholder="メールアドレス" />
                <p>{errors.email?.message}</p>
                </div>
                <div>
                <label>パスワード</label>
                <input {...register("password")} type="password" placeholder="パスワード" />
                <p>{errors.password?.message}</p>
                </div>
                
                <button type="submit">ログイン</button>
                
                <label>登録がまだお済みでない方はこちら</label>
                <button onClick={() => router.push('/user/register')}>登録</button>
                
            </form>
            </>
    );
}

export default Login;
