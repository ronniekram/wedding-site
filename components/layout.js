import { useState } from "react";
import Nav from "./nav";
import styles from "../styles/Home.module.scss";

const Layout = (props) => {
  const [open, setOpen] = useState(false);

  const renderFilter = () => {
    return open ? <div className={styles.filtered}></div> : null;
  };

  return (
    <div className={styles.container}>
      <Nav open={open} setOpen={setOpen} />
      
      <div className={styles.sunIcon}>
        <i className="far fa-sun"></i>
      </div>

      <main className={styles.main}>

        {renderFilter()}
        {props.children}
      </main>
    </div>
  );
};

export default Layout;
