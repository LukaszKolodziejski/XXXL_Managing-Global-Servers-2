import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import gsap from "gsap";

import styles from "./Online.module.css";

const Online = React.memo((props) => {
  const wrapperRing = useRef(null);
  const wrapperCircle = useRef(null);
  const wrapperStatus = useRef(null);
  useEffect(() => {
    const ring = wrapperRing.current;
    const circle = wrapperCircle.current;
    const status = wrapperStatus.current;
    const duration = 1.5 + Math.random() * 0.3 - 0.3;
    const delay = Math.random() * 5;
    const tl = gsap.timeline();
    tl.from(status, {
      duration: 0.5,
      x: "-10",
      ease: "power2.out",
    });
    tl.from(circle, { duration: 0.5, opacity: 0, x: "-10" });
    tl.to(ring, {
      duration,
      opacity: 1,
      repeat: -1,
      repeatDelay: 0.2,
      yoyo: true,
      scale: 1.2,
      ease: "slow(0.7, 0.7, false)",
      delay,
    });
  }, []);
  return (
    <div className={styles.RingContainer}>
      <div ref={wrapperRing} className={styles.Ringring}></div>
      <div ref={wrapperCircle} className={styles.Circle}></div>
      <div ref={wrapperStatus} className={styles.Online}>
        {props.status}
      </div>
    </div>
  );
});

Online.propTypes = {
  status: PropTypes.string.isRequired,
};

export default Online;
