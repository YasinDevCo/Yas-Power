import style from "./Services.module.css";
import gym from "./../assets/gym.svg";
import dite from "./../assets/dite.svg";
import mokamel from "./../assets/mokamel.svg";
import plane from "./../assets/plane.svg";
import { BsArrowLeft } from "react-icons/bs";

function Services() {
  const servicesData = [
    {
      id: 1,
      title: "برنامه تمرینی",
      description: "ارائه بهترین برنامه‌های تمرینی همراه با توضیحات کامل ویژه همه سطوح ورزشی",
      image: gym,
    },
    {
      id: 2,
      title: "رژیم غذایی",
      description: "ارائه آنلاین رژیم‌های غذایی ویژه ورزشکاران و افرادی که دوستدار سلامتی هستند",
      image: dite,
    },
    {
      id: 3,
      title: "مکمل‌های بدنسازی",
      description: "بررسی انواع مکمل‌های بدنسازی برای انتخاب بهترین مکمل بدنسازی",
      image: mokamel,
    },
    {
      id: 4,
      title: "برنامه تمرینی",
      description: "ارائه بهترین برنامه‌های تمرینی همراه با توضیحات کامل ویژه همه سطوح ورزشی",
      image: plane,
    },
  ];

  return (
    <div className={style.services}>
      <h3 className={style.h3}>خدمات ما</h3>
      <p className={style.p}>ما در ایکس پاور چه خدماتی ارائه می‌کنیم؟</p>
      <div className={style.cards}>
        {servicesData.map((service) => (
          <div key={service.id} className={style.card}>
            <img src={service.image} alt={service.title} />
            <h4>{service.title}</h4>
            <p>{service.description}</p>
            <span>
              ادامه مطلب <BsArrowLeft />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
