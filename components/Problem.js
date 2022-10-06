import { Grid, Typography } from '@mui/material';
import clsx from 'clsx';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from 'react';

import styles from '../styles/Home.module.css';

export default function Problem(props) {
  gsap.registerPlugin(ScrollTrigger);

  const problemHeaderRef = useRef();
  const problemText1Ref = useRef();
  const problemText2Ref = useRef();

  // Loads animations for elements of the page.
  useEffect(() => {
    gsap.fromTo(problemHeaderRef.current, {opacity: 0}, { opacity: 1, duration: 0.7, scrollTrigger: { trigger: "#problemHeader", start: "bottom bottom" } });
    gsap.fromTo(problemText1Ref.current, {opacity: 0}, { opacity: 1, duration: 0.7, scrollTrigger: { trigger: "#problemText1", start: "bottom bottom" } });
    gsap.fromTo(problemText2Ref.current, {opacity: 0}, { opacity: 1, duration: 0.7, scrollTrigger: { trigger: "#problemText1", start: "bottom bottom" } });
  }, [])

  return (
    <Grid container justifyContent="center" className={clsx(styles.introGrid)}>
      <Grid item xs={12} className={styles.introText}>
        <Typography id="problemHeader" ref={problemHeaderRef} variant="h1" className={clsx(styles.introTextTypographyLight, "mb-4 mt-4 text-center", styles.headerText)}>
          The Problem
        </Typography>
      </Grid>
      <Grid item lg={8} md={8} sm={10} xs={12} className={styles.introText}>
        <Typography variant="h3" id="problemText1" ref={problemText1Ref} className="mt-4 text-center">
          Validator nodes are a phenomenal way to earn a passive yield off of your coins while supporting a network, but many validators 
          are far out of reach for the average person.  They range anywhere from tens of thousands to hundreds of thousands worth of coins 
          just to have the opportunity to host one.  On top of that, they are complicated to set up and there can be a negative impact if the 
          node goes offline.  
        </Typography>
        <Typography variant="h3" id="problemText2" ref={problemText2Ref} className="mt-4 text-center">
          To put it simply, it isn't feasible for a vast majority of people to enjoy the fruits of these validator nodes.
        </Typography>
      </Grid>
    </Grid>
  )
}