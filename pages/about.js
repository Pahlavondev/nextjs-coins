import Head from "next/head";
import styles from "../styles/About.module.css";

const About = () => {
  return (
    <div>
      <Head>
        <title>About Page</title>
      </Head>

      <h1 className={styles.title}>This is About Page</h1>
      <p className={styles.text}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et eius,
        cumque vero necessitatibus voluptatibus in beatae aspernatur voluptatum
        sunt dolores omnis aut blanditiis neque, consequuntur vel consectetur ut
        quod. Commodi!
      </p>
    </div>
  );
};

export default About;
