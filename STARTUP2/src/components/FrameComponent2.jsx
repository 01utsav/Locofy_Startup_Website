import PropTypes from "prop-types";
import styles from "./FrameComponent2.module.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.contentTwoWrapper}>
        <div className={styles.contentTwo}>
          <h1
            className={styles.doloremHabemusMand}
          >{`Lorem ipsum dolor sit amet consectetur `}</h1>
          <div className={styles.eaEosEssent}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
            nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum,
            voluptate culpa nesciunt delectus iste?
          </div>
        </div>
      </div>
      <img
        className={styles.groupIcon}
        loading="lazy"
        alt=""
        src="/group-3.svg"
      />
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
