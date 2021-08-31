import Image from "next/image";
import styles from "../styles/contact.module.scss";
import contact from "../assets/svg/contact-text.svg";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.heading}>
        <Image src={contact} alt="SVG of the word Contact" />
      </div>

      <div className={styles.numbers}>
        <div>
          Stacy Bride
          <p><a href="tel:863-267-4089">(123) 456-7890</a></p>
        </div>

        <div>
          Jason Groom
          <p><a href="tel:781-715-5576">(987) 654-3210</a></p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
