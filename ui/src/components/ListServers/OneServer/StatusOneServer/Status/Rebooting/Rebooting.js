import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import gsap from "gsap";

import styles from "./Rebooting.module.css";

const Rebooting = (props) => {
  const wrapperDot = useRef(null);
  const wrapperStatus = useRef(null);
  useEffect(() => {
    const dot = wrapperDot.current.querySelectorAll("* > *");
    const status = wrapperStatus.current;
    const tl = gsap.timeline();
    tl.from(status, {
      duration: 0.3,
      x: "-10",
      opacity: 0,
      ease: "slow(0.7, 0.7, false)",
    });
    tl.to(dot, { opacity: 1 });
    tl.to(dot, {
      duration: 0.5,
      y: "-6",
      x: "5",
      stagger: {
        each: 0.15,
        x: "+30",
        repeat: -1,
        yoyo: true,
        ease: "slow(0.7, 0.7, false)",
      },
    });
  }, []);

  const fillArrayDot = (len) => {
    let arr = [];
    for (let i = 0; i < len; i++) {
      arr.push(
        <div key={i} id={i} className={styles.Dot}>
          .
        </div>
      );
    }
    return arr;
  };

  return (
    <div>
      <div ref={wrapperStatus} className={styles.Rebooting}>
        {props.status}
      </div>
      <span ref={wrapperDot}>{fillArrayDot(3)}</span>
    </div>
  );
};

Rebooting.propTypes = {
  status: PropTypes.string.isRequired,
};

export default Rebooting;
