'use client';

export function Register() {
    return (
        <div>
            <h3>ユーザー登録</h3>
            <form>
                <input type="text" placeholder="ユーザー名" />
                <input type="password" placeholder="パスワード" />
                <button type="submit">登録</button>
            </form>
        </div>
    );
}
