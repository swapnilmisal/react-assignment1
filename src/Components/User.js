import React from "react";
import classNames from "classnames";
import styles from "../Styles/Style.css";

let cx = classNames.bind(styles);

export default function User({ selectUser, result = [], isEditMode = false }) {
  let checkboxClasses = cx({
    Checkbox: true,
    Opaque: !isEditMode
  });

  return (
    <div>
      <label>
        <input
          className={checkboxClasses}
          type="checkbox"
          disabled={!isEditMode}
          checked={
            result["--selected--"] !== undefined && result["--selected--"]
          }
          onClick={selectUser}
          value="test"
        />
        {result.name.first} {result.name.last} {result.dob.age}
      </label>
    </div>
  );
}
