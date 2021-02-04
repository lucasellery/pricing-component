import { Grid } from "@material-ui/core";
import React from "react";
import Header from "../../components/Header";
import CardPricing from "../CardPricing";
import styles from "./styles.module.css";

function Home() {
  return (
    <>
      <Grid
        container
        direction="column"
        wrap="nowrap"
        alignItems="center"
        className={styles.containerHome}
      >
        <Grid item sm={12} md={12}>
          <Header />
        </Grid>
        <Grid item sm={12} md={12}>
          <CardPricing />
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
