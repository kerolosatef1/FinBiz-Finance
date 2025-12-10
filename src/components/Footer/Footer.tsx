import styles from "./Footer.module.scss";
import { FaFacebookF, FaInstagram, FaGithub, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return <>
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* 1 - Logo + Text */}
        <div className={styles.col}>
          <h2 className={styles.logo}>FinBiz</h2>
          <p className={styles.desc}>
            Data analysis software is a type of software tool used for data analysis and reporting.
          </p>
          <div className={styles.socials}>
            <FaFacebookF />
            <FaInstagram />
            <FaGithub />
            <FaXTwitter />
          </div>
        </div>
        <div className={styles.col}>
          <h3>Company</h3>
          <p>Services</p>
          <p>About Us</p>
        </div>
        {/* 3 - Help */}
        <div className={styles.col}>
          <h3>Help</h3>
          <p>Customer Services</p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
        <div className={styles.col}>
          <h3>Subscribe to Newsletter</h3>
          <div className={styles.action}>
            <input type="email" placeholder="Enter your email address" />
            <button>Book a Demo</button>
          </div>
        </div>
      </div>
    </footer>
  </>
};
export default Footer;