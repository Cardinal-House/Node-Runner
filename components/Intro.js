import Image from 'next/image';
import { Grid, Button, Typography, Tooltip } from '@mui/material';
import clsx from 'clsx';

import styles from '../styles/Home.module.css';

export default function Intro(props) {  
  return (
    <Grid container className={clsx(styles.introGrid)}>
      <Grid item xs={12} className={styles.introText}>
        <Typography variant="h1" className={clsx(styles.introTextTypographyLight, "mb-4 mt-4", styles.headerText)}>
          Fractionalizing Nodes Across Multiple Blockchains
        </Typography>
      </Grid>
      <Grid item lg={6} md={6} sm={6} xs={12} className={styles.introText}>
        <Typography variant="h3" className="mt-4">
          Node Runner gives people the opportunity to get a piece of a validator node for the fraction of the cost. 
          Instead of tens of thousands of dollars, users now only need 100 USDC to get exposure to validator nodes.  
        </Typography>
        <Typography variant="h3" className="mt-4">
          We are able to sell NFTs that represent a percentage stake in a validator node, take care of hosting, and distribute rewards for you. 
          This opens the doors for just about everyone that wants a piece of a validator to get one.
        </Typography>
        <Grid container className={styles.introBtnGrid}>
            <div className={styles.floated}>
              <Button href="https://cardinal-house.gitbook.io/node-runner/introduction/what-is-a-validator-node" target="_blank" rel="noreferrer" size="large" variant="outlined" color="primary" className={styles.introBtn1}>
                Learn More
              </Button>
            </div>
            <div className={styles.floated}>
              <Tooltip title="Mint Page will be Available when Node Runner Launches!">
                <Button size="large" variant="outlined" color="primary" className={styles.introBtn1}>
                  View dApp
                </Button>
              </Tooltip>
            </div>
            <div className={styles.floated}>
              <Button href="https://discord.gg/qa3GGsFfwC" target="_blank" rel="noreferrer" size="large" variant="contained" color="primary" className={styles.introBtn2}>
                Join Now
              </Button>
            </div>
        </Grid>
      </Grid>
      <Grid item lg={4} md={6} sm={8} xs={10} className={styles.gridImageGrid}>
        <Image src="/NodeRunnerGridFaded.png" width="750" height="750" />
      </Grid>
    </Grid>
  )
}