import React from "react";
import style from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

import headerImage from "../../Assets/meals.jpg";

export default function Header(props) {
  return (
    <>
      <header className={style.header}>
        <h1>ReactMeals</h1>

        <HeaderCartButton toggleCart={props.toggleCart} />
      </header>
      <div className={style["main-image"]}>
        <img src={headerImage} alt="delicious meals on a table" />
      </div>
    </>
  );
}
