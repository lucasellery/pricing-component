import { Grid } from "@material-ui/core";
import React from "react";
import Header from "../../components/Header";
import styles from "./styles.module.css";

function Home() {
  return (
    <>
      <Grid
        container
        direction="column"
        // justify="flex-start"
        alignItems="center"
        className={styles.containerHome}
      >
        <Grid item xs={12} sm={12} md={12}>
          <Header />
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
