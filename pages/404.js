import Link from "next/link";
import styles from "../styles/NotFound.module.css";

const PageNotFound = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Page Not Found</h1>
      <h3 className={styles.text}>
        Check to see if you are in the correct page.
      </h3>
      <Link className={styles.btn} href="/">
        Click here to go Home
      </Link>
    </div>
  );
};

export default PageNotFound;
