import { Fade as Hamburger } from 'hamburger-react';
import Link from 'next/link';
import styles from "../styles/nav.module.scss";

const Nav = ({ open, setOpen }) => {

  const showMenu = () => {
    if (open) {
      return (
        <div className={styles.menu}>
          <div onClick={() => setOpen(false)}>
            <Link href="/contact">
              Contact
            </Link>
            <i className="fas fa-phone-square"></i>
          </div>

          <hr />

          <div onClick={() => setOpen(false)}>
            <Link href="/itinerary">
              Itinerary
            </Link>
            <i className="far fa-sticky-note"></i>
          </div>

          <hr />

          <div onClick={() => setOpen(false)}>
            <Link href="/">
              Home
            </Link>
            <i className="fas fa-home"></i>
          </div>
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <>
      <div className={styles.navBar}>

        <div className={styles.burger}>
          <Hamburger 
            toggled={open} 
            toggle={setOpen} 
            label="Show Menu"
            duration={0.8}
          />
        </div>
      </div>

      <div className={styles.hideMenu}>
        {showMenu()}
      </div>
    </>
  );
};

export default Nav;
