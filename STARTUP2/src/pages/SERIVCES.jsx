import { useCallback } from "react";
import Content from "../components/Content";
import PricingCards from "../components/PricingCards";
import GroupComponent1 from "../components/GroupComponent1";
import styles from "./SERIVCES.module.css";

const SERIVCES = () => {
  const onHomeTextClick = useCallback(() => {
    window.open("/");
  }, []);

  const onContactTextClick = useCallback(() => {
    window.open("/contact-us");
  }, []);

  const onPortfolioTextClick = useCallback(() => {
    window.open("/portfolio");
  }, []);

  return (
    <div className={styles.serivces}>
      <main className={styles.frameParent}>
        <Content
          frameDivTop="unset"
          frameDivPosition="unset"
          onHomeTextClick={onHomeTextClick}
          onContactTextClick={onContactTextClick}
          onPortfolioTextClick={onPortfolioTextClick}
        />
        <section className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.frameDiv}>
                <div className={styles.petentiumWrapper}>
                  <b className={styles.petentium}>Plans</b>
                </div>
                <div className={styles.contentionesWrapper}>
                  <h1 className={styles.contentiones}>Our Services</h1>
                </div>
                <div className={styles.zrilPetentiumSitContainer}>
                  <p className={styles.loremIpsumDolor}>
                    Lorem ipsum, dolor sit amet consectetur
                  </p>
                  <p className={styles.adipisicingElit}>adipisicing elit.</p>
                </div>
              </div>
            </div>
            <div className={styles.pricingHeader}>
              <PricingCards basic="Basic" durationFiller="$100" />
              <PricingCards
                basic="Plus"
                propMinWidth="31px"
                durationFiller="$250"
                propMinWidth1="99px"
              />
              <PricingCards
                basic="Pro"
                propMinWidth="25px"
                durationFiller="$400"
                propMinWidth1="103px"
              />
            </div>
          </div>
        </section>
      </main>
      <GroupComponent1
        group35="/group-35.svg"
        group38="/group-38.svg"
        group39="/group-39.svg"
        frameDivWidth="242.5px"
        logosAlignSelf="stretch"
      />
    </div>
  );
};

export default SERIVCES;
