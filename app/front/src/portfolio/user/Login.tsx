import React from "react";

export function Login() {
    return(
        <div>
            <h3>ログイン</h3>
            <form>
                <input type="text" placeholder="ユーザー名" />
                <input type="password" placeholder="パスワード" />
                <button type="submit">ログイン</button>
            </form>
        </div>
    );
}