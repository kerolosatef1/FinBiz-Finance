import styles from "./Footer.module.scss";
import { FaFacebookF, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.col}>
          <h2 className={styles.logo}>FinBiz</h2>
          <p className={styles.desc}>
            {t("Data analysis software...")}
          </p>
          <div className={styles.socials}>
            <FaFacebookF />
            <FaInstagram />
            <FaXTwitter />
            <FaLinkedin />
          </div>
        </div>

        {/* 2 - Company */}
        <div className={styles.col}>
          <h3>{t("Company")}</h3>
          <p>{t("About Us")}</p>
          <p>{t("Services")}</p>
          <p>{t("Features")}</p>
          <p>{t("Integration")}</p>
          <p>{t("Pricing")}</p>
          <p>{t("Blog")}</p>
        </div>

        {/* 3 - Support */}
        <div className={styles.col}>
          <h3>{t("Support")}</h3>
          <p>{t("Get Help")}</p>
          <p>{t("FAQs")}</p>
          <p>{t("Contact Us")}</p>
        </div>


        <div className={styles.col}>
          <h3>{t("Subscribe to Newsletter")}</h3>
          <div className={styles.action}>
            <input type="email" placeholder={t("Enter your email address")} />
            <button>{t("join")}</button>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className={styles.copyrightBar}>
        <div className={styles.copyrightContainer}>
          <p>{t("Copyright")}</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;