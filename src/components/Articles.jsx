import style from "./Articles.module.css";
import pic4 from "./../assets/pic4.svg";
import pic5 from "./../assets/pic5.svg";
import pic6 from "./../assets/pic6.svg";
import { CgArrowLeft } from "react-icons/cg";

function Articles() {
  const articlesData = [
    {
      id: 1,
      title: "پولدارترین بدنسازهای تاریخ",
      description: "صنعت بدنسازی گاهی مرموز به نظر می‌رسد، اگر می‌خواهید بدانید چه افرادی در این صنعت، پول‌های حسابی بدست می‌آورند...",
      image: pic6,
      time: "۱۲ ساعت پیش",
    },
    {
      id: 2,
      title: "برنامه تمرینی اینتروال چربی سوزی",
      description: "تمرینات اینتروال (HIIT) موثرترین روش تمرین برای چربی سوزی و حفظ عضلات است. در ادامه سعی می‌کنم درمورد تمرینات اینتروال بیشتر...",
      image: pic5,
      time: "10 ساعت پیش",
    },
    {
      id: 3,
      title: "چقدر مقدار وزنه انتخاب کنم؟",
      description: "صنعت بدنسازی گاهی مرموز به نظر می‌رسد، اگر می‌خواهید بدانید چه افرادی در این صنعت، پول‌های حسابی بدست می‌آورند با ما همراه باشید.",
      image: pic4,
      time: "2 ساعت پیش",
    },
  ];

  return (
    <div className={style.articles}>
      <h3 className={style.h3}>جدیدترین مقالات</h3>
      <div className={style.items}>
        {articlesData.map((article) => (
          <div key={article.id} className={style.item}>
            <div className={style.image}>
              <img src={article.image} alt={article.title} />
            </div>
            <div className={style.content}>
              <h5>{article.title}</h5>
              <p>{article.description}</p>
            </div>
            <span>{article.time}</span>
            <button>
              <CgArrowLeft size={30} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Articles;
