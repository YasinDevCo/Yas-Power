import style from "./Intro.module.css";
import cup from "./../assets/cup.svg";
import human from "./../assets/HUMAN.png";
function Intro() {
  return (
    <>
      <div className="container">
        <section>
          <div className={style.contnets}>
            <h1 >هر آنچه برای رسیدن به اندام ایده آل نیاز دارید</h1>
            <p className={style.p}>
              تخصصی ترین وبسایت بدنسازی درایران با مجوز رسمی
            </p>
            <div className={style.contnet}>
              <p>
                با بیش از ۲۵ سال تجربه در ورزش بدنسازی و تناسب اندام تصمیم
                گرفتیم دانش و تجربه خود را در اختیار همه علاقه‌مندان به این رشته
                ورزشی جذاب قرار دهیم.
              </p>
              <span>
                <img src={cup} />
              </span>
            </div>
            <div className={style.countUsers}>
              <div>
                <span className={style.count}>+۲۰۰۰ </span>
                <span className={style.users}>کاربر فعال</span>
              </div>
              <div className={style.sb}>
                <span className={style.count}>+۲۰۰۰ </span>
                <span className={style.users}>کاربر فعال</span>
              </div>
              <div>
                <span className={style.count}>+۲۰۰۰ </span>
                <span className={style.users}>کاربر فعال</span>
              </div>
            </div>
          </div>
          <div className={style.pictur}>
            

            
            <div className={style.circleLine}>
              <div className={style.circleItem}>
                <img src={human} />
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className={style.banner}>
        همه می خواهند بدنساز باشند اما کسی نمی خواهد وزنه های سنگین بلند کند!
      </div>
    </>
  );
}

export default Intro;
