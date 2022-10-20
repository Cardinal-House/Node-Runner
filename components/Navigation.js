import { Grid, Typography, Button } from '@mui/material';
import { Navbar, Nav, Container } from 'react-bootstrap';
import clsx from 'clsx';
import { IconContext } from "react-icons";
import { FaDiscord, FaTwitter } from 'react-icons/fa';

import styles from '../styles/Navigation.module.css';

export default function Navigation(props) {
    return (
        <Grid container justifyContent="center" alignItems="center" className="navGrid pt-3">
            <Navbar expand="lg" bg="custom-light" variant="dark" className={clsx("m-auto", styles.navBar, "darkNav")}>
                <Navbar.Text className={styles.navBarBrand}>
                    <Container>
                        <Navbar.Brand className={styles.navBarBrand}>
                            <img alt="" src="/NodeRunnerLogoText.png" width="175" height="23" className={clsx(styles.logoImage)} />
                            {/*
                            <Typography variant="p" className={styles.navBrandTextMain}>
                                <b>&nbsp;&nbsp;Node Runner</b>
                            </Typography>
                            */}
                        </Navbar.Brand>
                    </Container>
                </Navbar.Text>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className={styles.navBarItems}>
                    <Nav className="justify-content-end" style={{ width: "80%" }}>
                        <Button variant="outlined" className={styles.whitePaperBtn} href="https://cardinal-house.gitbook.io/node-runner/introduction/what-is-a-validator-node" target="_blank">
                            White Paper
                        </Button>
                        <IconContext.Provider value={{ color: "#eb175a" }} className={styles.socialIcons}>
                            <div className={styles.socialIcons}>
                                <div className={styles.socialIcon}>
                                    <a href="https://discord.gg/qa3GGsFfwC" target="_blank" rel="noreferrer">
                                        <FaDiscord className={styles.iconSize} />
                                    </a>
                                </div>
                                <div className={clsx(styles.socialIcon, styles.socialIconSpacing)}>
                                    <a href="https://twitter.com/Node_Runner_" target="_blank" rel="noreferrer">
                                        <FaTwitter className={styles.iconSize} />
                                    </a>
                                </div>
                            </div>
                        </IconContext.Provider>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Grid>
    )
}