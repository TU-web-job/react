'use client';
import Link from "next/link";
import { useForm } from "react-hook-form";

type FormValues = {
    userName: string;
    email:string;
    password:string;
};

export function Register() {
    const {register, handleSubmit, formState: { errors } } = useForm<FormValues>();

    const onSubmit = async (data: FormValues) => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/register`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        });

        const result = await res.json();
        alert(result.message);
    };

    return (
        <div>
            <h3>ユーザー登録</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                <input {...register("userName")} type="text" placeholder="ユーザー名" />
                <p>{errors.userName?.message}</p>
                </div>
                <div>
                <input {...register("email")} type="email" placeholder="E-mail" />
                <p>{errors.email?.message}</p>
                </div>
                <div>
                <input {...register("password")} type="password" placeholder="パスワード" />
                <p>{errors.password?.message}</p>
                </div>
                <button type="submit">登録</button>
                <Link href="/user"><button>戻る</button></Link>
            </form>
        </div>
    );
}
