import React from "react";
import style from "./Product.module.css";
import { BiPlus } from "react-icons/bi";
import pic1 from "../assets/pic1.svg";
import pic2 from "../assets/pic2.svg";
import pic3 from "../assets/pic3.svg";

const products = [
  {
    id: 1,
    image: pic1,
    title: "پروتئین وی یوروویتال 1000 گرم",
    price: "۱/۸۰۰/۰۰۰ تومان",
  },
  {
    id: 2,
    image: pic2,
    title: "پروتئین وی یوروویتال 1000 گرم",
    price: "۱/۸۰۰/۰۰۰ تومان",
  },
  {
    id: 3,
    image: pic3,
    title: "پروتئین وی یوروویتال 1000 گرم",
    price: "۱/۸۰۰/۰۰۰ تومان",
  },
  {
    id: 4,
    image: pic1,
    title: "پروتئین وی یوروویتال 1000 گرم",
    price: "۱/۸۰۰/۰۰۰ تومان",
  },
  // {
  //   id: 5,
  //   image: pic2,
  //   title: "پروتئین وی یوروویتال 1000 گرم",
  //   price: "۱/۸۰۰/۰۰۰ تومان",
  // },
  // {
  //   id: 6,
  //   image: pic3,
  //   title: "پروتئین وی یوروویتال 1000 گرم",
  //   price: "۱/۸۰۰/۰۰۰ تومان",
  // },
  // {
  //   id: 7,
  //   image: pic1,
  //   title: "پروتئین وی یوروویتال 1000 گرم",
  //   price: "۱/۸۰۰/۰۰۰ تومان",
  // },
  // {
  //   id: 8,
  //   image: pic2,
  //   title: "پروتئین وی یوروویتال 1000 گرم",
  //   price: "۱/۸۰۰/۰۰۰ تومان",
  // },
];

function Product() {
  return (
    <div className={style.product}>
      <h3 className={style.h3}> محصولات</h3>
      <p className={style.p}> جدیدترین محصولات </p>

      <div className={style.slider}>
        {products.map((product) => (
          <div key={product.id} className={style.slide}>
            <div className={style.image}>
              <img src={product.image} alt={product.title} />
            </div>
            <div className={style.content}>
              <h4>{product.title}</h4>
              <div>
                <span>قیمت: </span>
                <span>{product.price}</span>
              </div>
            </div>
            <button className={style.btn1}>
              <BiPlus size={25} />
            </button>
            <button className={style.btn2}>افزودن به سبد خرید</button>
          </div>
        ))}

        {/* <div className={style.cir}>
          <span></span>
          <span style={{ background: "var(--text-purple-color)" }}></span>
          <span></span>
        </div> */}
      </div>
    </div>
  );
}

export default Product;
