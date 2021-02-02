import { Grid, Typography } from "@material-ui/core";
import React from "react";
import styles from "./styles.module.css";

function Header() {
  return (
    <>
      <Grid container direction="column" alignItems="center" className={styles.headerContainer}>
        <Grid item className={styles.firstTitleContainer}>
          <Typography className={styles.firstTitle}>Simple, traffic-based pricing</Typography>
        </Grid>

        <Grid item justify="center" alignContent="center" className={styles.subtitleContainer}>
          <Typography className={styles.subtitleOne}>Sign-up for our 30-day trial.</Typography>
          <Typography className={styles.subtitleTwo}>No credit card required.</Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default Header;
