import React from "react";
import classes from './switcher.module.css';
function Switcher(props:any) {
  return (
    <div>
      <label className={`${classes.switch}`}>
        <input data-testid="switcher-input" {...props} type="checkbox" />
        <span className={`${classes.slider}`}></span>
      </label>
    </div>
  );
}

export default Switcher;
