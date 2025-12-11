import styles from "./FinanceSolution.module.scss";
import image1 from "../../../public/download (1).jpeg";
import image2 from "../../../public/download.jpeg";
import image3 from "../../../public/images (1).jpeg";
import image4 from "../../../public/images.jpeg";
import { useTranslation } from "react-i18next";
export default function Hero() {
  const { t } = useTranslation()

  return (
    <main className={styles.hero}>

      <div className={styles.badge}>
        <span>New</span>{t("Introducing AI Automation →")}
      </div>
      <h1 className={styles.title}>
        The Finance Solutions <br />
        For Your Business
      </h1>
      <p className={styles.subtitle}>
        {t("Empower your finance team. The one stop platform for all financial management of small and medium-sized business.")}
      </p>

      <div className={styles.action}>
        <input type="email" placeholder="Enter your email address" />
        <button>Book a Demo</button>
      </div>

      <div className={styles.reviews}>
        <div className={styles.avatars}>
          <img src={image1} alt="user" />
          <img src={image2} alt="user" />
          <img src={image3} alt="user" />
          <img src={image4} alt="user" />
        </div>
        <span className={styles.text}>
          1200+ reviews <strong>(4.9 of 5)</strong>
        </span>
      </div>

    </main>
  );
}
