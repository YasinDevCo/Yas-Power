import React, { useState, useEffect } from "react";
import style from "./Videoes.module.css";
import pic7 from "./../assets/video/pic7.jpg";
import pic8 from "./../assets/video/pic8.jpg";
import pic9 from "./../assets/video/pic9.jpg";
import video from "./../assets/video.svg";
import pen from "./../assets/video/pen.svg";
import prev from "./../assets/video/arrowprev.svg";
import play from "./../assets/video/play.svg";
import next from "./../assets/video/arrownext.svg";
import set from "./../assets/video/seting.svg";
import line from "./../assets/video/line.svg";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

function Videoes() {
  // آرایه‌ای از ویدیوها یا محتوای مربوطه
  const videosData = [
    {
      title: "آموزش جلو بازو ایستاده",
      description:
        "هیچ وقت دو تا از حرکات جلو بازو با هم یکی نیستند. شما باید مابین حرکات جلو بازو تک منظوره و ترکیبی تعادل داشته باشید...",
      image: pic7,
    },
    {
      title: "آموزش پرس سینه",
      description:
        "پرس سینه یکی از بهترین حرکات برای تقویت عضلات سینه است. این حرکت باید با دقت و کنترل انجام شود...",
      image: pic9,
    },
    {
      title: "آموزش اسکات",
      description:
        "اسکات یکی از حرکات کلیدی برای تقویت پاها و عضلات پایین تنه است. این حرکت باید به دقت انجام شود...",
      image: pic8, 
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevVideo = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? videosData.length - 1 : prevIndex - 1
    );
  };

  const nextVideo = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === videosData.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextVideo();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className={style.videoesSlide}>
      <div className={style.content}>
        <h3>
          ویدیو آموزشی
          <img src={video} alt="video icon" />
        </h3>
     
        <h4>{videosData[currentIndex].title}</h4>
        <p>{videosData[currentIndex].description}</p>
        <button className={style.btnR} onClick={prevVideo}>
          <MdKeyboardArrowRight size={40} />
        </button>
        <button className={style.btnL} onClick={nextVideo}>
          <MdKeyboardArrowLeft size={40} />
        </button>
        <div className={style.slideCircle}>
          {[...Array(videosData.length)].map((_, index) => (
            <span
              key={index}
              style={{
                background:
                  index === currentIndex
                    ? "var(--item-purple-color)" 
                    : "#fff",
              }}
            ></span>
          ))}
        </div>
      </div>
      <div className={style.videoe}>
        <img src={videosData[currentIndex].image} alt="current video" />
        <div className={style.other}>
          <div>
            <img className={style.line} src={line} />
          </div>
          <div className={style.videoIcone}>
            <img src={pen} style={{ width: "25px" }} />
            <img src={next} style={{ width: "25px" }} onClick={prevVideo} />
            <img src={play} style={{ width: "35px" }} />
            <img src={prev} style={{ width: "25px" }} onClick={nextVideo} />
            <img src={set} style={{ width: "25px" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Videoes;
