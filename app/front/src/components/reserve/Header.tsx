export default function Header(){

    const MENU = [
        {menuName : "トップページ", href : "/reserve"},
        {menuName : "ユーザー登録", href : "/reserve/UserConfig"},
        {menuName : "予約登録", href : "/reserve/Config"},
        {menuName : "予約一覧", href : "/reserve/List"}
    ]
    return (
        <header>
            <h4 className="">予約画面</h4>
            <ul>
                {MENU.map((menu,index) => {
                    return (
                        <li key={index}><a href={menu.href}>{menu.menuName}</a></li>
                    );
                })}
            </ul>        
        </header>
    );
}