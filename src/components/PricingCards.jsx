import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./PricingCards.module.css";

const PricingCards = ({
  className = "",
  basic,
  propMinWidth,
  durationFiller,
  propMinWidth1,
}) => {
  const basicStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const durationFillerStyle = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div className={[styles.pricingCards, className].join(" ")}>
      <div className={styles.basicCard}>
        <div className={styles.plusCard}>
          <div className={styles.proCard}>
            <div className={styles.cardHeader}>
              <div className={styles.basic} style={basicStyle}>
                {basic}
              </div>
              <div className={styles.cardDuration}>
                <b
                  className={styles.durationFiller}
                  style={durationFillerStyle}
                >
                  {durationFiller}
                </b>
                <div className={styles.month}>/month</div>
              </div>
            </div>
            <div className={styles.loremIpsumDolor}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
              nemo hic quos, ab, dolor aperiam
            </div>
          </div>
          <div className={styles.frameParent}>
            <div className={styles.checkLg1Parent}>
              <img
                className={styles.checkLg1Icon}
                loading="lazy"
                alt=""
                src="/checklg-1.svg"
              />
              <div
                className={styles.loremIpsumDolor1}
              >{`Lorem ipsum, dolor sit `}</div>
            </div>
            <div className={styles.checkLg1Parent}>
              <img
                className={styles.checkLg1Icon}
                loading="lazy"
                alt=""
                src="/checklg-1.svg"
              />
              <div
                className={styles.loremIpsumDolor1}
              >{`Lorem ipsum, dolor sit `}</div>
            </div>
            <div className={styles.checkLg1Parent}>
              <img
                className={styles.checkLg1Icon}
                loading="lazy"
                alt=""
                src="/checklg-1.svg"
              />
              <div
                className={styles.loremIpsumDolor1}
              >{`Lorem ipsum, dolor sit `}</div>
            </div>
            <div className={styles.checkLg1Parent}>
              <img
                className={styles.checkLg1Icon}
                loading="lazy"
                alt=""
                src="/checklg-1.svg"
              />
              <div
                className={styles.loremIpsumDolor1}
              >{`Lorem ipsum, dolor sit `}</div>
            </div>
            <div className={styles.checkLg1Parent}>
              <img
                className={styles.checkLg1Icon}
                loading="lazy"
                alt=""
                src="/checklg-1.svg"
              />
              <div
                className={styles.loremIpsumDolor1}
              >{`Lorem ipsum, dolor sit `}</div>
            </div>
          </div>
        </div>
        <div className={styles.pricingCardButtons}>
          <button className={styles.darkbuttonprimarytext}>
            <div className={styles.rectangle} />
            <div className={styles.button}>Learn More</div>
          </button>
        </div>
      </div>
    </div>
  );
};

PricingCards.propTypes = {
  className: PropTypes.string,
  basic: PropTypes.string,
  durationFiller: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
  propMinWidth1: PropTypes.any,
};

export default PricingCards;
