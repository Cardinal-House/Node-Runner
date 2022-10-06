import { Grid, Typography } from '@mui/material';
import clsx from 'clsx';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from 'react';

import styles from '../styles/Home.module.css';

export default function Solution(props) {  
  gsap.registerPlugin(ScrollTrigger);

  const solutionHeaderRef = useRef();
  const solutionText1Ref = useRef();
  const solutionText2Ref = useRef();

  // Loads animations for elements of the page.
  useEffect(() => {
    gsap.fromTo(solutionHeaderRef.current, {opacity: 0}, { opacity: 1, duration: 0.7, scrollTrigger: { trigger: "#solutionHeader", start: "bottom bottom" } });
    gsap.fromTo(solutionText1Ref.current, {opacity: 0}, { opacity: 1, duration: 0.7, scrollTrigger: { trigger: "#solutionText1", start: "bottom bottom" } });
    gsap.fromTo(solutionText2Ref.current, {opacity: 0}, { opacity: 1, duration: 0.7, scrollTrigger: { trigger: "#solutionText1", start: "bottom bottom" } });
  }, [])

  return (
    <Grid container justifyContent="center" className={clsx(styles.introGrid)}>
      <Grid item xs={12} className={styles.introText}>
        <Typography variant="h1" id="solutionHeader" ref={solutionHeaderRef} className={clsx(styles.introTextTypographyLight, "mb-2 mt-4 text-center", styles.headerText)}>
          The Solution
        </Typography>
      </Grid>
      <Grid item lg={8} md={8} sm={10} xs={12} className={styles.introText}>
        <Typography variant="h3" id="solutionText1" ref={solutionText1Ref} className="mt-4 text-center">
          Node Runner gives people the opportunity to get a piece of a validator node for the fraction of the cost. 
          Instead of tens of thousands of dollars, users now only need 100 USDC to get exposure to validator nodes.  
        </Typography>
        <Typography variant="h3" id="solutionText2" ref={solutionText2Ref} className="mt-4 text-center">
          We are able to sell NFTs that represent a percentage stake in a validator node, take care of hosting, and distribute rewards for you. 
          This opens the doors for just about everyone that wants a piece of a validator to get one.
        </Typography>
      </Grid>
    </Grid>
  )
}