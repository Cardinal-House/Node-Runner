import { Grid, Typography, Button, Card, CardContent } from '@mui/material';
import clsx from 'clsx';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from 'react';

import styles from '../styles/Home.module.css';

export default function WhatSeparatesUs(props) {  
  gsap.registerPlugin(ScrollTrigger);

  const separatesHeaderRef = useRef();
  const separatesCard1Ref = useRef();
  const separatesCard2Ref = useRef();
  const separatesCard3Ref = useRef();

  // Loads animations for elements of the page.
  useEffect(() => {
    gsap.fromTo(separatesHeaderRef.current, {opacity: 0}, { opacity: 1, duration: 0.7, scrollTrigger: { trigger: "#separatesHeader", start: "bottom bottom" } });
    gsap.fromTo(separatesCard1Ref.current, {opacity: 0}, { opacity: 1, duration: 0.7, scrollTrigger: { trigger: "#separatesCard1", start: "bottom bottom" } });
    gsap.fromTo(separatesCard2Ref.current, {opacity: 0}, { opacity: 1, duration: 0.7, scrollTrigger: { trigger: "#separatesCard2", start: "bottom bottom" } });
    gsap.fromTo(separatesCard3Ref.current, {opacity: 0}, { opacity: 1, duration: 0.7, scrollTrigger: { trigger: "#separatesCard3", start: "bottom bottom" } });
  }, [])

  return (
    <Grid container justifyContent="center" spacing={6} className={clsx(styles.introGrid)}>
      <Grid item xs={12} className={styles.introText}>
        <Typography variant="h1" id="separatesHeader" ref={separatesHeaderRef} className={clsx(styles.introTextTypographyLight, "mb-2 mt-4 text-center", styles.headerText)}>
          What Separates Us?
        </Typography>
      </Grid>
      <Grid item xs={12} sm={10} md={6} lg={4} className="mb-5 text-center">
        <Card id="separatesCard1" ref={separatesCard1Ref} className={styles.customCard}>
            <div>
              <CardContent>
                <Typography variant="h4" component="div" className={clsx("text-2xl font-bold", styles.headerText)}>
                  NFTs Increase with Demand
                </Typography>
                <Typography variant="p" component="div" className={clsx(styles.bigBtnDescriptionText, "font-bold mt-5")}>
                  With projects like Hydro Whales, the floor price increasing after an NFT Mint negates much of the ROI. For example, Hydro Whales minted at a around $500, but 
                  the floor price is currently sitting at $2,260. This means the ROI is actually 75% lower now than if you got in at $500.
                  With Node Runner, NFT collections for nodes will increase with demand so this won't be a problem.
                </Typography>
                <Button variant="outlined" className="mt-3" href="https://cardinal-house.gitbook.io/node-runner/process-overview/nfts" target="_blank" rel="noreferrer">
                  How the NFTs Work
                </Button>
              </CardContent>
            </div>
          </Card>
      </Grid>
      <Grid item xs={12} sm={10} md={6} lg={4} className="mb-5 text-center">
        <Card id="separatesCard2" ref={separatesCard2Ref} className={styles.customCard}>
            <div>
              <CardContent>
                <Typography variant="h4" component="div" className={clsx("text-2xl font-bold", styles.headerText)}>
                  Fees are Extremely Low
                </Typography>
                <Typography variant="p" component="div" className={clsx(styles.bigBtnDescriptionText, "font-bold mt-5")}>
                  Many NFT Projects take a large fee up front for DOING NOTHING. We will not take any of the NFT raise for team, marketing, etc. 
                  The only fee that is taken is the Overhead cost of running the node + a 5% fee of any rewards. At the time of writing, there is no 
                  cost to maintaining a DAG node, so there would only be a 5% fee taken off the top of any rewards generated.
                </Typography>
                <Button variant="outlined" className="mt-3" href="https://cardinal-house.gitbook.io/node-runner/process-overview/fees" target="_blank" rel="noreferrer">
                  Fee Details
                </Button>
              </CardContent>
            </div>
          </Card>
      </Grid>
      <Grid item xs={12} sm={10} md={6} lg={4} className="mb-5 text-center">
        <Card id="separatesCard3" ref={separatesCard3Ref} className={styles.customCard}>
            <div>
              <CardContent>
                <Typography variant="h4" component="div" className={clsx("text-2xl font-bold", styles.headerText)}>
                  Cited Returns are Realistic
                </Typography>
                <Typography variant="p" component="div" className={clsx(styles.bigBtnDescriptionText, "font-bold mt-5")}>
                  Many NFT groups assume a massive run up during the next bull run. While this is not unlikely, we would like to help you make an 
                  informed decision rather than spoon feed you numbers that might not be achieved. We are maintaining a very conservative stance on 
                  the returns we are citing. The return Percentages are all based on the number of Coins held, not the dollar value of the asset. 
                </Typography>
                <Button variant="outlined" className="mt-3" href="https://cardinal-house.gitbook.io/node-runner/potential-rewards-distribution" target="_blank" rel="noreferrer">
                  Returns Example
                </Button>
              </CardContent>
            </div>
          </Card>
      </Grid>
    </Grid>
  )
}