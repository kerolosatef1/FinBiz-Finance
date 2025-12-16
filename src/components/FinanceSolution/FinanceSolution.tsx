import  "./FinanceSolution.scss";
import image1 from "/download (1).jpeg";
import image2 from "/download.jpeg";
import image3 from "/images (1).jpeg";
import image4 from "/images.jpeg";
import { useTranslation } from "react-i18next";
export default function FinanceSolution() {
  const { t } = useTranslation()

  return (
    <main className="hero">

      <div className="badge">
        <span>New</span>{t("Introducing AI Automation →")}
      </div>
      <h1 className="title">
        The Finance Solutions <br />
        For Your Business
      </h1>
      <p className="subtitle">
        {t("Empower your finance team. The one stop platform for all financial management of small and medium-sized business.")}
      </p>

      <div className="action-finance">
        <input type="email" placeholder="Enter your email address" />
        <button>Book a Demo</button>
      </div>

      <div className="reviews">
        <div className="avatars">
          <img src={image1} alt="user1" />
          <img src={image2} alt="user2" />
          <img src={image3} alt="user3" />
          <img src={image4} alt="user4" />
        </div>
        <span className="text">
          1200+ reviews <strong>(4.9 of 5)</strong>
        </span>
      </div>

    </main>
  );
}
