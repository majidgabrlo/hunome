import React from "react";
import { Grid } from "react-loader-spinner";
import classes from './spinner.module.css';

function Spinner() {
  return (
    <div data-testid="spinner-test-id" className={classes.spinner}>
      <Grid height="100" width="100" color="grey" ariaLabel="loading" />;
    </div>
  );
}

export default Spinner;
