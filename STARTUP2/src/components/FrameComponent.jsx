import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./FrameComponent.module.css";

const FrameComponent = ({ className = "" }) => {
  const navigate = useNavigate();

  const onPortfolioTextClick = useCallback(() => {
    window.open("/portfolio");
  }, []);

  const onServicesTextClick = useCallback(() => {
    window.open("/serivces");
  }, []);

  const onContactTextClick = useCallback(() => {
    window.open("/contact-us");
  }, []);

  const onDarkButtonPrimaryTextClick = useCallback(() => {
    navigate("/portfolio");
  }, [navigate]);

  const onFrameClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='logoPlaceholder']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onFrameClick1 = useCallback(() => {
    navigate("/serivces");
  }, [navigate]);

  const onFrameClick2 = useCallback(() => {
    navigate("/contact-us");
  }, [navigate]);

  return (
    <section className={[styles.logoPlaceholderParent, className].join(" ")}>
      <div
        className={styles.logoPlaceholder}
        data-scroll-to="logoPlaceholder"
      />
      <header className={styles.navigationLinks}>
        <div className={styles.subContent}>
          <img
            className={styles.subContentChild}
            loading="lazy"
            alt=""
            src="/group-1.svg"
          />
          <h1 className={styles.start}>Start</h1>
        </div>
        <nav className={styles.navigationWrapper}>
          <nav className={styles.navigation}>
            <div className={styles.home}>Home</div>
            <div className={styles.portfolio} onClick={onPortfolioTextClick}>
              Portfolio
            </div>
            <div className={styles.services} onClick={onServicesTextClick}>
              Services
            </div>
            <div className={styles.contact} onClick={onContactTextClick}>
              Contact
            </div>
          </nav>
        </nav>
      </header>
      <div className={styles.body}>
        <div className={styles.mainContent}>
          <div className={styles.expetendaParent}>
            <b className={styles.expetenda}>WELCOME</b>
            <div className={styles.description}>
              <h1
                className={styles.duoVeriEripuit}
              >{`Lorem ipsum dolor sit amet consectetur `}</h1>
              <div className={styles.duoStetPossim}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos
                error ipsum, voluptate culpa nesciunt delectus iste?
              </div>
            </div>
            <button
              className={styles.darkbuttonprimarytext}
              onClick={onDarkButtonPrimaryTextClick}
            >
              <div className={styles.rectangle} />
              <div className={styles.button}>Explore</div>
            </button>
          </div>
        </div>
        <img
          className={styles.groupIcon}
          loading="lazy"
          alt=""
          src="/group.svg"
        />
      </div>
      <div className={styles.frameChild} onClick={onFrameClick} />
      <div
        className={styles.frameItem}
        onClick={onDarkButtonPrimaryTextClick}
      />
      <div className={styles.frameInner} onClick={onFrameClick1} />
      <div className={styles.frameDiv} onClick={onFrameClick2} />
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
