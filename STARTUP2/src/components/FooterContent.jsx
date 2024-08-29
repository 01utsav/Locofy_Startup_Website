import FrameComponent1 from "./FrameComponent1";
import FrameComponent2 from "./FrameComponent2";
import GroupComponent from "./GroupComponent";
import PropTypes from "prop-types";
import styles from "./FooterContent.module.css";

const FooterContent = ({ className = "" }) => {
  return (
    <div className={[styles.footerContent, className].join(" ")}>
      <div className={styles.columnsWrapper}>
        <div className={styles.columns}>
          <div className={styles.columnOne}>
            <div className={styles.frameParent}>
              <div className={styles.petentiumWrapper}>
                <b className={styles.petentium}>partners</b>
              </div>
              <div className={styles.contentionesWrapper}>
                <h1 className={styles.contentiones}>Lorem Ipsum Dolor</h1>
              </div>
              <div className={styles.zrilPetentiumSitContainer}>
                <p className={styles.loremIpsumDolor}>
                  Lorem ipsum, dolor sit amet consectetur
                </p>
                <p className={styles.adipisicingElit}>adipisicing elit.</p>
              </div>
            </div>
          </div>
          <div className={styles.columnTwo}>
            <img
              className={styles.xmlid24Icon}
              loading="lazy"
              alt=""
              src="/xmlid-24.svg"
            />
            <div className={styles.listItem}>
              <img
                className={styles.xmlid1Icon}
                loading="lazy"
                alt=""
                src="/xmlid-1.svg"
              />
            </div>
            <img
              className={styles.xmlid1Icon1}
              loading="lazy"
              alt=""
              src="/xmlid-1-1.svg"
            />
            <div className={styles.icon}>
              <img
                className={styles.groupIcon}
                loading="lazy"
                alt=""
                src="/group-11.svg"
              />
            </div>
            <img
              className={styles.xmlid1Icon2}
              loading="lazy"
              alt=""
              src="/xmlid-1-2.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.columnThree}>
        <FrameComponent1 />
        <FrameComponent2 />
      </div>
      <div className={styles.columnFour}>
        <div className={styles.contact}>
          <div className={styles.columnOne}>
            <div className={styles.fields}>
              <div className={styles.scriptoremWrapper}>
                <b className={styles.scriptorem}>team</b>
              </div>
              <div className={styles.sitAliiTantasWrapper}>
                <h1 className={styles.contentiones}>Our Talents</h1>
              </div>
              <div className={styles.vixHabeoScaevolaContainer}>
                <p className={styles.loremIpsumDolor}>
                  Lorem ipsum, dolor sit amet consectetur
                </p>
                <p className={styles.adipisicingElit}>
                  Suscipit nemo hic quos, ab,
                </p>
              </div>
            </div>
          </div>
          <div className={styles.teamContent}>
            <GroupComponent
              group14="/group-14@2x.png"
              pegLegge="Peg Legge"
              cEO="CEO"
            />
            <GroupComponent
              propWidth="252px"
              propWidth1="252px"
              group14="/group-15@2x.png"
              pegLegge="Richard Guerra"
              propDisplay="unset"
              propMinWidth="unset"
              cEO="CTO"
            />
            <GroupComponent
              propWidth="252px"
              propWidth1="252px"
              group14="/group-15-1@2x.png"
              pegLegge="Alexandra Stolz"
              propDisplay="unset"
              propMinWidth="unset"
              cEO="DESIGNER"
            />
            <GroupComponent
              propWidth="252px"
              propWidth1="252px"
              group14="/group-15-2@2x.png"
              pegLegge="Janet Bray"
              propDisplay="inline-block"
              propMinWidth="108px"
              cEO="DEVELOPER"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

FooterContent.propTypes = {
  className: PropTypes.string,
};

export default FooterContent;
