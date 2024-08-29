import { useCallback } from "react";
import Content from "../components/Content";
import GroupComponent1 from "../components/GroupComponent1";
import styles from "./PORTFOLIO.module.css";

const PORTFOLIO = () => {
  const onHomeTextClick = useCallback(() => {
    window.open("/");
  }, []);

  const onServicesTextClick = useCallback(() => {
    window.open("/serivces");
  }, []);

  const onContactTextClick = useCallback(() => {
    window.open("/contact-us");
  }, []);

  return (
    <div className={styles.portfolio}>
      <main className={styles.contentParent}>
        <Content
          onHomeTextClick={onHomeTextClick}
          onServicesTextClick={onServicesTextClick}
          onContactTextClick={onContactTextClick}
        />
        <section className={styles.structureWrapper}>
          <div className={styles.structure}>
            <div className={styles.structureInner}>
              <div className={styles.frameParent}>
                <div className={styles.petentiumWrapper}>
                  <b className={styles.petentium}>Works</b>
                </div>
                <div className={styles.contentionesWrapper}>
                  <h1 className={styles.contentiones}>Portfolio</h1>
                </div>
                <div className={styles.zrilPetentiumSitContainer}>
                  <p className={styles.loremIpsumDolor}>
                    Lorem ipsum, dolor sit amet consectetur
                  </p>
                  <p className={styles.adipisicingElit}>adipisicing elit.</p>
                </div>
              </div>
            </div>
            <div className={styles.imageLayout}>
              <div className={styles.imageBlocks}>
                <img
                  className={styles.dscdscd1Icon}
                  loading="lazy"
                  alt=""
                  src="/dscdscd-1.svg"
                />
                <img
                  className={styles.imageBlockIcon}
                  loading="lazy"
                  alt=""
                  src="/frame-42.svg"
                />
              </div>
              <div className={styles.imageBlocks}>
                <img
                  className={styles.imageBlocksChild}
                  loading="lazy"
                  alt=""
                  src="/frame-43.svg"
                />
                <img
                  className={styles.imageBlocksItem}
                  loading="lazy"
                  alt=""
                  src="/frame-43-1.svg"
                />
              </div>
              <div className={styles.imageBlocks}>
                <img
                  className={styles.imagePairIcon}
                  loading="lazy"
                  alt=""
                  src="/frame-43-2.svg"
                />
                <img
                  className={styles.imagePairIcon1}
                  loading="lazy"
                  alt=""
                  src="/frame-43-3.svg"
                />
              </div>
              <div className={styles.imageCaption}>
                <img
                  className={styles.dscdsc1Icon}
                  loading="lazy"
                  alt=""
                  src="/dscdsc-1.svg"
                />
                <div className={styles.shapeWrapper}>
                  <img
                    className={styles.shapeIcon}
                    loading="lazy"
                    alt=""
                    src="/5175975-1@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <GroupComponent1
        group35="/group-35.svg"
        group38="/group-38.svg"
        group39="/group-39.svg"
        frameDivWidth="unset"
        logosAlignSelf="unset"
      />
    </div>
  );
};

export default PORTFOLIO;
