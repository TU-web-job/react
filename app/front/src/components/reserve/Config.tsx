'use client';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import style from './reserve.module.css';

type FormValues = {
    userName: string;
    email: string;
    password: string;
    phoneNumber: string;
};

export default function Config() {

    const {register, handleSubmit, formState: { errors } } = useForm<FormValues>();

    const onSubmit = async (data: FormValues) => {
        const res = await fetch(`${process.env.NODE_PUBLIC_API_URL}/api/reserve/config`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        });
        const result = await res.json();
        alert('登録できました！');

        router.push('/reserve/Config');
    };

    const router = useRouter();


    const FORM = [{title: "名前", input: "userName",typeText: "text"},
        {title: "メールアドレス", input: "email", typeText: "email"},
        {title: "パスワード", input: "password", typeText: "password"},
        {title: "電話番号", input: "text", typeText:"phoneNumber"}];

    
    return(
        <>
        <h3>予約登録画面</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
            {FORM.map((list, index) => {
                return(
                    <div key={index}>
                        <label>{list.title}</label>
                        <input {...register(list.input as keyof FormValues)} type={list.input}/>
                        {errors[list.input as keyof FormValues] && (
                            <p style={{color: 'red'}}>必須項目です。</p>
                        )}
                    </div>
                )
            })}
        <button type='submit'>予約</button>
        </form>
        </>
    );
}