import { useCallback } from "react";
import Content from "../components/Content";
import Main from "../components/Main";
import GroupComponent1 from "../components/GroupComponent1";
import styles from "./CONTACTUS.module.css";

const CONTACTUS = () => {
  const onHomeTextClick = useCallback(() => {
    window.open("/");
  }, []);

  const onServicesTextClick = useCallback(() => {
    window.open("/serivces");
  }, []);

  const onPortfolioTextClick = useCallback(() => {
    window.open("/portfolio");
  }, []);

  return (
    <div className={styles.contactUs}>
      <main className={styles.frameParent}>
        <Content
          frameDivTop="unset"
          frameDivPosition="unset"
          onHomeTextClick={onHomeTextClick}
          onServicesTextClick={onServicesTextClick}
          onPortfolioTextClick={onPortfolioTextClick}
        />
        <section className={styles.contentLayerTwo}>
          <div className={styles.frameGroup}>
            <div className={styles.mainWrapper}>
              <Main />
            </div>
            <div className={styles.formContainerParent}>
              <form className={styles.formContainer}>
                <div className={styles.formFields}>
                  <div className={styles.name}>Name</div>
                  <input className={styles.inputFields} type="text" />
                </div>
                <div className={styles.formFields}>
                  <div className={styles.email}>Email</div>
                  <input className={styles.inputFields} type="text" />
                </div>
                <div className={styles.formFields}>
                  <div className={styles.message}>Message</div>
                  <div className={styles.formFieldsItem} />
                </div>
                <button className={styles.darkbuttonprimarytext}>
                  <div className={styles.rectangle} />
                  <div className={styles.button}>Submit</div>
                </button>
              </form>
              <img
                className={styles.ghhgnhg1Icon}
                alt=""
                src="/ghhgnhg-1.svg"
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

export default CONTACTUS;
