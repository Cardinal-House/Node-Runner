import { Grid, Button, Typography, Tooltip } from '@mui/material';
import Countdown from 'react-countdown';
import clsx from 'clsx';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from 'react';

import styles from '../styles/Home.module.css';

export default function CountdownToLaunch(props) {
  gsap.registerPlugin(ScrollTrigger);

  const launchesInHeaderRef = useRef();
  const countdownRef = useRef();
  const afterCountdownTextRef = useRef();
  const mintNFTSBtnRef = useRef();

  // Loads animations for elements of the page.
  useEffect(() => {
    gsap.fromTo(launchesInHeaderRef.current, {opacity: 0}, { opacity: 1, duration: 0.7, scrollTrigger: { trigger: "#launchesInHeader", start: "bottom bottom" } });
    gsap.fromTo(countdownRef.current, {opacity: 0}, { opacity: 1, duration: 0.7, scrollTrigger: { trigger: "#launchesInHeader", start: "bottom bottom" } });
    gsap.fromTo(afterCountdownTextRef.current, {opacity: 0}, { opacity: 1, duration: 0.7, scrollTrigger: { trigger: "#afterCountdownText", start: "bottom bottom" } });
    gsap.fromTo(mintNFTSBtnRef.current, {opacity: 0}, { opacity: 1, duration: 0.7, scrollTrigger: { trigger: "#afterCountdownText", start: "bottom bottom" } });
  }, [])

  return (
    <Grid container justifyContent="center" className={clsx(styles.introGrid, "text-center")}>
      <Grid item lg={10} md={10} sm={12} xs={12}>
        <Typography variant="h2" id="launchesInHeader" ref={launchesInHeaderRef} className={styles.launchesInText}>
          Node Runner Launches In:
        </Typography>
      </Grid> 
      <Grid item lg={10} md={10} sm={12} xs={12} className="countdownDiv mb-5">
        <Countdown id="countdown" ref={countdownRef} date={new Date(2022, 9, 28, 12, 0, 0)} />
      </Grid>
      <Grid item lg={8} md={10} sm={12} xs={12} className={styles.afterCountdownText}>
        <Typography variant="h2" id="afterCountdownText" ref={afterCountdownTextRef}>
          Once Node Runner Launches, Go to the Cardinal House dApp to mintyour node NFTs!
        </Typography>
      </Grid>
      <Grid item lg={8} md={10} sm={12} xs={12} className="mt-5 mb-5">
        <Tooltip title="Mint Page will be Available when Node Runner Launches!">
          <Button variant="contained" id="mintNFTSBtn" ref={mintNFTSBtnRef} size="large">
            Mint Your NFTs!
          </Button>
        </Tooltip>
      </Grid>
    </Grid>
  )
}