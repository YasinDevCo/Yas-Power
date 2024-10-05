import style from "./Footer.module.css";
import zarin from "./../assets/zarin.svg";
import enemad from "./../assets/enemad.svg";
import { ImInstagram } from "react-icons/im";
import { BsInstagram, BsTelegram, BsTwitter, BsWhatsapp } from "react-icons/bs";
function Footer() {
  return (
    <footer>
      <div className="container">
        <div className={style.footer}>
          <div className={style.topFooter}>
            <span>۰۲۱ ۳۴۵۶ ۲۲۴۵: شماره تماس</span>
            <div>
              <p>ما را در شبکه های اجتماعی دنبال کنید</p>
              <span><BsInstagram size={20}/></span>
              <span><BsTwitter size={20}/></span>
              <span><BsTelegram size={20}/></span>
              <span><BsWhatsapp size={20}/></span>
            </div>
          </div>
          <div className={style.items}>
            <div className={style.links}>
              <ul>
                <h3>راهنمای مشتریان</h3>
                <li>پاسخ به پرسش های متداول</li>
                <li>روش های ارسال کالا</li>
                <li>روش های پرداخت</li>
                <li>قوانین و مقررات</li>
              </ul>
              <ul>
                <h3>راهنمای مشتریان</h3>
                <li>پاسخ به پرسش های متداول</li>
                <li>روش های ارسال کالا</li>
                <li>روش های پرداخت</li>
                <li>قوانین و مقررات</li>
              </ul>
            </div>
            <div className={style.images}>
              <div className={style.image}>
                <img src={zarin} />
              </div>
              <div
                style={{ background: "var(--text-main-color)" }}
                className={style.image}
              >
                <img src={enemad} />
              </div>
            </div>
          </div>

          <div className={style.atention}>
            کلیه حقوق متعلق به این وبسایت می باشد.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
