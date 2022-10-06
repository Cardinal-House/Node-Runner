import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from 'react';

import Navigation from '../components/Navigation';
import Intro from '../components/Intro';
import Problem from '../components/Problem';
import Solution from '../components/Solution';
import WhatSeparatesUs from '../components/WhatSeparatesUs';
import GetInvolved from '../components/GetInvolved';
import CountdownToLaunch from '../components/CountdownToLaunch';

import styles from '../styles/Home.module.css';

export default function Home(props) {
  gsap.registerPlugin(ScrollTrigger);

  const bar1Ref = useRef();
  const bar2Ref = useRef();

  // Loads animations for elements of the page.
  useEffect(() => {
    gsap.fromTo(bar1Ref.current, {opacity: 0}, { opacity: 1, duration: 0.7, scrollTrigger: { trigger: "#bar1", start: "bottom bottom" } });
    gsap.fromTo(bar2Ref.current, {opacity: 0}, { opacity: 1, duration: 0.7, scrollTrigger: { trigger: "#bar2", start: "bottom bottom" } });
  }, [])

  return (
    <div className={styles.mainBackgroundColor}>
      <div className={styles.introBackground}>
        {/* ~~~~~ Navigation ~~~~~ */}
        <Navigation />

        {/* ~~~~~ Intro Text and Graphic ~~~~~ */}
        <Intro />
      </div>
      <main>
        <div className={styles.mainContent}>
          <Problem />
          <div id="bar1" ref={bar1Ref} className={styles.bar} />
          <Solution />
          <div id="bar2" ref={bar2Ref} className={styles.bar} />
          <WhatSeparatesUs />
          <GetInvolved />
          <CountdownToLaunch />
        </div>
      </main>
    </div>
  )
}
