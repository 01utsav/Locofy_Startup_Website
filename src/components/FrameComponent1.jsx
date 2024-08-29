import PropTypes from "prop-types";
import styles from "./FrameComponent1.module.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div className={[styles.groupParent, className].join(" ")}>
      <img
        className={styles.groupIcon}
        loading="lazy"
        alt=""
        src="/group-2.svg"
      />
      <div className={styles.quoteOne}>
        <div className={styles.nemoreFacilisiMediParent}>
          <h1
            className={styles.nemoreFacilisiMedi}
          >{`Lorem ipsum dolor sit amet consectetur `}</h1>
          <div className={styles.dicatEripuitAccums}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
            nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum,
            voluptate culpa nesciunt delectus iste?
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
