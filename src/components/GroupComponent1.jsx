import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./GroupComponent1.module.css";

const GroupComponent1 = ({
  className = "",
  propWidth,
  propAlignSelf,
  group35,
  group38,
  group39,
  frameDivWidth,
  logosAlignSelf,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      width: frameDivWidth,
    };
  }, [frameDivWidth]);

  const logosStyle = useMemo(() => {
    return {
      alignSelf: logosAlignSelf,
    };
  }, [logosAlignSelf]);

  return (
    <footer className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.rectangle} />
      <div className={styles.footerContent}>
        <div className={styles.logosWrapper} style={frameDivStyle}>
          <div className={styles.logos} style={logosStyle}>
            <img className={styles.logosChild} alt="" src="/group-33.svg" />
            <img
              className={styles.logosItem}
              loading="lazy"
              alt=""
              src="/group-34.svg"
            />
            <img
              className={styles.logosInner}
              loading="lazy"
              alt=""
              src={group35}
            />
            <img
              className={styles.groupIcon}
              loading="lazy"
              alt=""
              src="/group-36.svg"
            />
            <img
              className={styles.logosChild1}
              loading="lazy"
              alt=""
              src="/group-37.svg"
            />
            <img
              className={styles.logosItem}
              loading="lazy"
              alt=""
              src={group38}
            />
            <img
              className={styles.logosChild3}
              loading="lazy"
              alt=""
              src={group39}
            />
          </div>
        </div>
        <div className={styles.logo2019All}>
          © Start, 2022. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

GroupComponent1.propTypes = {
  className: PropTypes.string,
  group35: PropTypes.string,
  group38: PropTypes.string,
  group39: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propAlignSelf: PropTypes.any,
  frameDivWidth: PropTypes.any,
  logosAlignSelf: PropTypes.any,
};

export default GroupComponent1;
