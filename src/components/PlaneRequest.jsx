import { CgArrowLeft, CgArrowRight } from "react-icons/cg";
import style from "./PlaneRequest.module.css";
import human from "./../assets/human.svg";
import clock from "./../assets/clock.svg";
import cup from "./../assets/medal.svg";
function PlaneRequest() {
  return (
    <div className={style.planeRequest}>
      <div className={style.content}>
        <h3>برنامه تمرینی کاملا اختصاصی برای شما...</h3>
        <p>
          هر کسی با یه هدفی ورزش میکنه، کاهش وزن ،افزایش وزن، بدنسازی، حفظ تناسب
          اندامش ، آسیب جسمانی خیلیا هم نمیذاره بعضی از حرکات رو انجام بدن ، با
          ایکس پاور یه برنامه ورزشی کاملا مختص به شرایط خودتون دریافت خواهید
          کرد.
        </p>
       <div className={style.btns}>
       <button>دریافت برنامه تمرینی</button>
        <button>
          مشاهده نظر کاربران
          <CgArrowLeft size={40}/>
        </button>
       </div>
      </div>
      <div className={style.image}>
        <img src={human} alt="" />
        <div className={style.pic1}>
          <img src={clock} />
          <span>برنامه تمرینی کاملا ختصاصی</span>
        </div>
        <div className={style.pic2}>
          <img src={cup} alt="" />
          <span>زیر نظر بهترین مربی ها</span>
        </div>
      </div>
    </div>
  );
}

export default PlaneRequest;
