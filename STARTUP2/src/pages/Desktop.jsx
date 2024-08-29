import FrameComponent from "../components/FrameComponent";
import FooterContent from "../components/FooterContent";
import GroupComponent1 from "../components/GroupComponent1";
import styles from "./Desktop.module.css";

const Desktop = () => {
  return (
    <div className={styles.desktop1440}>
      <main className={styles.top}>
        <FrameComponent />
        <section className={styles.team}>
          <FooterContent />
        </section>
      </main>
      <GroupComponent1
        group35="/group-35.svg"
        group38="/group-38.svg"
        group39="/group-39.svg"
      />
    </div>
  );
};

export default Desktop;
