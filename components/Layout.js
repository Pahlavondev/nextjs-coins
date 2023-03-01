import Navbar from "./Navbar";
import styles from "../styles/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className={styles.wrapper}>{children}</div>
    </div>
  );
};

export default Layout;
