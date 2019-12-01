import React from "react";
import classNames from "classnames";
import styles from "../Styles/Style.css";

let cx = classNames.bind(styles);
export default function Button(props) {
  let buttonClasses = cx({
    Button: true,
    Hidden: props.disabled <= 0,
    Active: props.active
  });

  return (
    <button className={buttonClasses} onClick={props.onClick}>
      {props.children}
    </button>
  );
}
