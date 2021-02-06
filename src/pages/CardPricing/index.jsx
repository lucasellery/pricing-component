import { Grid, Input, makeStyles, Slider } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import React from "react";
import styles from "./styles.module.css";

const useStyles = makeStyles({
  '.MuiSlider-thumb': {
    background: blue,
  }

})

function CardPricing() {
  const styleRoot = useStyles();

  return (
    <>
      <Grid
        className={styles.cardContainer}
        container
        direction="column"
        alignItems="center"
      >
        <Grid item>
          <p className={styles.firstLabel}>100k pageviews</p>
        </Grid>

        <Grid item className={styles.containerSlider}>
          <Slider style={styleRoot} className={styles.slider} value={30} aria-labelledby="input-slider" />
        </Grid>

        <Grid item>
          <Input 
            value={''}
            margin='none'
            inputProps={{
              step: 10,
              min: 0,
              max: 100,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default CardPricing;
