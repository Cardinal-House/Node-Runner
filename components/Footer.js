import clsx from 'clsx';
import { Grid, Typography, Button } from '@mui/material';

import styles from '../styles/Footer.module.css';

function Footer(props) {
    return (
        <div className={styles.footerDiv}>
            <Grid container justifyContent="center" alignItems="center" spacing={2} className="text-center pb-4">
                <Grid item xs={12} className={clsx(styles.copyrightText, "mt-4")}>
                    Copyright © 2022 Node Runner
                </Grid>
            </Grid>
        </div>
    )
}

export default Footer;