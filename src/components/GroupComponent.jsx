import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./GroupComponent.module.css";

const GroupComponent = ({
  className = "",
  propWidth,
  propWidth1,
  group14,
  pegLegge,
  propDisplay,
  propMinWidth,
  cEO,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const rectangleDivStyle = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const pegLeggeStyle = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  return (
    <div
      className={[styles.rectangleParent, className].join(" ")}
      style={groupDivStyle}
    >
      <div className={styles.frameChild} style={rectangleDivStyle} />
      <div className={styles.member}>
        <div className={styles.details}>
          <img
            className={styles.detailsChild}
            loading="lazy"
            alt=""
            src={group14}
          />
        </div>
        <div className={styles.info}>
          <b className={styles.pegLegge} style={pegLeggeStyle}>
            {pegLegge}
          </b>
          <div className={styles.ceo}>{cEO}</div>
        </div>
      </div>
    </div>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
  group14: PropTypes.string,
  pegLegge: PropTypes.string,
  cEO: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propWidth1: PropTypes.any,
  propDisplay: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default GroupComponent;
