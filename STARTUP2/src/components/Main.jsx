import PropTypes from "prop-types";
import styles from "./Main.module.css";

const Main = ({ className = "" }) => {
  return (
    <div className={[styles.main, className].join(" ")}>
      <div className={styles.contentionesWrapper}>
        <h1 className={styles.contentiones}>Contact Us</h1>
      </div>
      <div className={styles.zrilPetentiumSitContainer}>
        <p className={styles.loremIpsumDolor}>
          Lorem ipsum, dolor sit amet consectetur
        </p>
        <p className={styles.adipisicingElit}>adipisicing elit.</p>
      </div>
    </div>
  );
};

Main.propTypes = {
  className: PropTypes.string,
};

export default Main;
