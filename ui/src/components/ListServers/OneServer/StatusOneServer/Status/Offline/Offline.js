import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import gsap from "gsap";

import styles from "./Offline.module.css";

const Offline = React.memo((props) => {
  const wrapperCross = useRef(null);
  const wrapperStatus = useRef(null);
  useEffect(() => {
    const cross = wrapperCross.current;
    const status = wrapperStatus.current;
    const tl = gsap.timeline();
    tl.from(status, {
      duration: 0.5,
      x: "-10",
      ease: "power2.out",
    });
    tl.from(cross, {
      duration: 0.7,
      rotate: -70,
      opacity: 0,
      x: "10",
      ease: "power2.out",
    });
    tl.to(cross, {
      duration: 0.5,
      color: "#ea5885",
    });
  }, []);
  return (
    <div className={styles.Container}>
      <div ref={wrapperCross} className={styles.Cross}>
        x
      </div>
      <div ref={wrapperStatus} className={styles.Offline}>
        {props.status}
      </div>
    </div>
  );
});

Offline.propTypes = {
  status: PropTypes.string.isRequired,
};

export default Offline;
