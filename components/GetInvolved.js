import { Grid, Button, Typography } from '@mui/material';
import clsx from 'clsx';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from 'react';

import styles from '../styles/Home.module.css';

export default function GetInvolved(props) {
  gsap.registerPlugin(ScrollTrigger);

  const involvedHeaderRef = useRef();
  const involvedTextRef = useRef();
  const involvedBtn1Ref = useRef();
  const involvedBtn2Ref = useRef();

  // Loads animations for elements of the page.
  useEffect(() => {
    gsap.fromTo(involvedHeaderRef.current, {opacity: 0}, { opacity: 1, duration: 0.7, scrollTrigger: { trigger: "#involvedHeader", start: "bottom bottom" } });
    gsap.fromTo(involvedTextRef.current, {opacity: 0}, { opacity: 1, duration: 0.7, scrollTrigger: { trigger: "#involvedText", start: "bottom bottom" } });
    gsap.fromTo(involvedBtn1Ref.current, {opacity: 0}, { opacity: 1, duration: 0.7, scrollTrigger: { trigger: "#involvedBtn1", start: "bottom bottom" } });
    gsap.fromTo(involvedBtn2Ref.current, {opacity: 0}, { opacity: 1, duration: 0.7, scrollTrigger: { trigger: "#involvedBtn2", start: "bottom bottom" } });
  }, [])

  return (
    <Grid container justifyContent="center" className={clsx(styles.introGrid)}>
      <Grid item xs={12} className={styles.introText}>
        <Typography variant="h1" id="involvedHeader" ref={involvedHeaderRef} className={clsx(styles.introTextTypographyLight, "mb-5 mt-4 text-center", styles.headerText)}>
          Get Involved Today
        </Typography>
      </Grid>
      <Grid item lg={8} md={8} sm={10} xs={12} className={styles.introText}>
        <Typography variant="h3" id="involvedText" ref={involvedTextRef} className="mt-4 text-center">
          Node Runner will be an exclusive benefit to the Cardinal Crew members in the Cardinal House Discord. 
          Wallets that are whitelisted through Cardinal Crew will be the only wallets allowed to mint NFTs and interact on the secondary marketplace.
          If you&apos;re interested being involved in Node Runner, check out the Cardinal House Discord server and consider becoming
          a Cardinal Crew member. Once Node Runner launches later this month, you&apos;ll then be able to mint Node Runner NFTs!
          There are also many other benefits to being a Cardinal Crew member besides being able to participate in Node Runner.
        </Typography>
      </Grid>
      <Grid item lg={8} md={8} sm={10} xs={12} className={clsx(styles.introText, "text-center mt-4")}>
        <div className={styles.centeredBtn}>
          <Button variant="outlined" id="involvedBtn1" ref={involvedBtn1Ref} size="large" href="https://cardinal-house.gitbook.io/node-runner/cardinal-crew" target="_blank" rel="noreferrer">
            Cardinal Crew Details
          </Button>
        </div>
        <div className={styles.centeredBtn}>
          <Button variant="outlined" id="involvedBtn2" ref={involvedBtn2Ref} size="large" href="https://discord.gg/qa3GGsFfwC" target="_blank" rel="noreferrer">
            Join Cardinal House
          </Button>
        </div>
      </Grid>
    </Grid>
  )
}