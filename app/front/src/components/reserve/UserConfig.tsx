import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import style from "./reserve.module.css";

type FormValues = {
    user_name: string;
    user_email: string;
    password: string;
    user_phone: string;
}

export default function UserConfig(){
    const {register, handleSubmit, formState: { errors } } = useForm<FormValues>();

    const onSubmit = async (data: FormValues) => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/reserve/UserConfig`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        });
        const result = await res.json();
        alert(result.message);
        router.push('/reserve/Config');
    };
    const router = useRouter();

    const INPUT = [
        {title: "ユーザー名", type:"text", placeholder: "XXXX XXXX", column: "user_name", error: errors.user_name?.message},
        {title: "メールアドレス", type:"email", placeholder: "XXX@XX.com", column: "user_email", error: errors.user_email?.message},
        {title: "パスワード", type:"password", placeholder: "4桁から8桁で入力してください", column: "password", error: errors.password?.message},
        {title: "電話番号", type:"text", placeholder: "XXX-XXXX-XXXX", column: "user_phone", error: errors.user_phone?.message}
    ]

    return(
        <>
        <h3>ユーザー登録</h3>
        <form onSubmit={handleSubmit(onSubmit)}> 
            {INPUT.map((inputText,index) => {
                return(
                    <div key={index} className={style.inputGroup}>
                        <label>{inputText.title}</label>
                        <input {...register(inputText.column as keyof FormValues)} type={inputText.type} placeholder={inputText.placeholder} />
                        <p>{inputText.error}</p>
                    </div>
                );
            })}
            <button type="submit" className={style.btn}>登録</button>
            <button type="button"><a href="/reserve">戻る</a></button>
        </form>
        </>
    );
}