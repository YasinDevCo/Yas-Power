import { VscAccount } from "react-icons/vsc";
import style from "./Header.module.css";

function Header() {
  return (
    <div className="container">
       <header>
      <div>
        <h1>Y.POWER</h1>
        <ul>
          <li>صفحه اصلی</li>
          <li>فروشگاه</li>
          <li>خدمات</li>
          <li>بلاگ</li>
          <li>درباره ما</li>
        </ul>
      </div>
      <button className={style.btnDesk}>ورود و ثبت نام</button>
      <button className={style.btnTablet}> <VscAccount size={40} />  </button>
    </header>
    </div>
  );
}

export default Header;
