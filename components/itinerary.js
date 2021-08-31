import Item from "./item";
import { thursday, friday, saturday } from "../data/dates";
import styles from "../styles/itinerary.module.scss";

const Intinerary = () => {
  const dates = [thursday, friday, saturday];

  const renderItems = (date) => {
    return date.items.map((item) => {
      return <Item time={item.time} desc={item.desc} key={item.time} />;
    });
  };

  const renderDates = () => {
    return dates.map((date) => {
      return (
        <div key={date.date} className={styles.date}>
          {date.date}
          <div>{renderItems(date)}</div>
        </div>
      );
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.heading}>Itinerary</div>

      <div className={styles.days}>{renderDates()}</div>

      <div className={styles.pdf}>
        <a 
          href="https://drive.google.com/file/d/1tQ_2kRve7g6wf0F2zopG2t1lvKMYU7q9/view" target="_blank" 
          rel="noreferrer"
          download
        >
          Download PDF for details</a>
      </div>
    </div>
  );
};

export default Intinerary;
