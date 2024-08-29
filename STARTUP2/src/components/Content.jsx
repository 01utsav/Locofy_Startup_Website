import { useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Content.module.css";

const Content = ({
  className = "",
  frameDivTop,
  frameDivPosition,
  onHomeTextClick,
  onServicesTextClick,
  onContactTextClick,
  onPortfolioTextClick,
}) => {
  const contentStyle = useMemo(() => {
    return {
      top: frameDivTop,
      position: frameDivPosition,
    };
  }, [frameDivTop, frameDivPosition]);

  const navigate = useNavigate();

  const onHomeTextClick1 = useCallback(() => {
    window.open("/");
  }, []);

  const onServicesTextClick1 = useCallback(() => {
    window.open("/serivces");
  }, []);

  const onContactTextClick1 = useCallback(() => {
    window.open("/contact-us");
  }, []);

  const onFrameClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='logoPlaceholder']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onFrameClick1 = useCallback(() => {
    navigate("/portfolio");
  }, [navigate]);

  const onFrameClick2 = useCallback(() => {
    navigate("/serivces");
  }, [navigate]);

  const onFrameClick3 = useCallback(() => {
    navigate("/contact-us");
  }, [navigate]);

  return (
    <header
      className={[styles.content, className].join(" ")}
      style={contentStyle}
    >
      <div className={styles.rectangle} />
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <img
            className={styles.frameChild}
            loading="lazy"
            alt=""
            src="/group-1.svg"
          />
          <h1 className={styles.start}>Start</h1>
        </div>
        <nav className={styles.frameWrapper}>
          <nav className={styles.homeParent}>
            <div className={styles.home} onClick={onHomeTextClick}>
              Home
            </div>
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
      </div>
      <div className={styles.contentChild} onClick={onFrameClick} />
      <div className={styles.contentItem} onClick={onFrameClick1} />
      <div className={styles.contentInner} onClick={onFrameClick2} />
      <div className={styles.frameDiv} onClick={onFrameClick3} />
    </header>
  );
};

Content.propTypes = {
  className: PropTypes.string,

  /** Style props */
  frameDivTop: PropTypes.any,
  frameDivPosition: PropTypes.any,

  /** Action props */
  onHomeTextClick: PropTypes.func,
  onServicesTextClick: PropTypes.func,
  onContactTextClick: PropTypes.func,
  onPortfolioTextClick: PropTypes.func,
};

export default Content;
