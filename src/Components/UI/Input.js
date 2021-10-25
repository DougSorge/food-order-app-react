import React from "react";
import style from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={style.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      {/* The input element is receiving props from the parent component. props.input is going to be an object containing the key value pairs necessary for configuring the attributes of an input. Using the spread operator on the input lets us plug all of the key value pairs into the element without having to explicitly decalre them. This allows us to configure each individual input we use as we see fit from the outside and leaves to input component highly flexible for future use. */}
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
