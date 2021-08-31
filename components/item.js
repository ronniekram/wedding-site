import styles from "../styles/item.module.scss";

const Item = ({ time, desc }) => {
  return (
    <div className={styles.container}>

      <p className={styles.time}>
        {time}
      </p>

      <p className={styles.desc}>
        {desc}
      </p>
      
    </div>

  );
};

export default Item;
