import Axios from "axios";
import styles from "../../styles/Coins.module.css";

const CoinList = ({ coinData }) => {
  return (
    <div className={styles.content}>
      {coinData.coins.map((coin, id) => {
        return (
          <div key={id}>
            <h1 className={styles.title}>{coin.name}</h1>
            <img className={styles.image} src={coin.icon} alt="icon" />
            <p className={styles.text}>{coin.price}</p>
          </div>
        );
      })}
    </div>
  );
};

export const getStaticProps = async () => {
  // const id = params.id; { params }
  const data = await Axios.get(
    "https://api.coinstats.app/public/v1/coins?skip=0"
  );

  return {
    props: {
      coinData: data.data,
    },
    revalidate: 10,
  };
};
export default CoinList;
