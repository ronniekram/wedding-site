import styles from '../styles/announcement.module.scss';

const Announcement = () => {

  return (
    <div className={styles.announcement}>
      
      <div className={styles.names}>
        <h1>Stacy & Jason</h1>
        <p>are getting married!</p>
      </div>

      <div className={styles.location}>
        Las Vegas, Nevada
      </div>

      <div className={styles.date}>
        October 9th, 2021
      </div>
    </div>
  )
};

export default Announcement;