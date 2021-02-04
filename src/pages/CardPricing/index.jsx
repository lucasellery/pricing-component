import { Grid } from "@material-ui/core";
import React from "react";
import styles from "./styles.module.css";

function CardPricing() {
  return (
    <>
      <Grid
        className={styles.cardContainer}
        container
        direction="column"
        alignItems="center"
      >
        <Grid item container>
          <Grid item>
            <p className={styles.firstLabel}>100k pageviews</p>
          </Grid>
        </Grid>

        <Grid item container></Grid>
      </Grid>
    </>
  );
}

export default CardPricing;
