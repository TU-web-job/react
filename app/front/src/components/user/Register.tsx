'use client';
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import style from "./user.module.css";

type FormValues = {
    user_name: string;
    email:string;
    password:string;
    address :string;
    phone_number: string;
};

function Register() {
    const {register, handleSubmit, formState: { errors } } = useForm<FormValues>();

    const onSubmit = async (data: FormValues) => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/register`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        });
        const result = await res.json();
        alert(result.message);

        router.push('/user/Result');
    };

    const router = useRouter();

    return (
        <>
            <h3>ユーザー登録</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={style.registerItem}>
                    <label>ユーザー名 : </label>
                <input {...register("user_name")} type="text" placeholder="ユーザー名" />
                <p>{errors.user_name?.message}</p>
                </div>
                <div className={style.registerItem}>
                    <label>メールアドレス : </label>
                <input {...register("email")} type="email" placeholder="E-mail" />
                <p>{errors.email?.message}</p>
                </div>
                <div className={style.registerItem}>
                    <label>パスワード : </label>
                <input {...register("password")} type="password" placeholder="パスワード" />
                <p>{errors.password?.message}</p>
                </div>
                <div className={style.registerItem}>
                    <label>住所 : </label>
                    <input {...register("address")} type="text" />
                    <p>{errors.address?.message}</p>
                </div>
                <div className={style.registerItem}>
                    <label>電話番号 : </label>
                    <input {...register("phone_number")} type="text" placeholder="xxx-xxxx-xxxx"/>
                    <p>{errors.phone_number?.message}</p>
                </div>
                <button className={`${style.btn} ${style.btn_register}`} type="submit">登録</button>

            </form>
            
            <p>すでに登録済みの方はこちら</p>
            <button className={`${style.btn} ${style.btn_login}`} onClick={() => router.push('/user/Login')}>ログイン</button>
            <p> or </p>
            <button className={`${style.btn} ${style.btn_back}`} onClick={() => router.push('/user')}>戻る</button>
        </>
    );
}

export default Register;
