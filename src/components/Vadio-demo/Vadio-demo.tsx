import "./Vadio-demo.scss";
import { useTranslation } from "react-i18next";
import imageplan from "/card-Br_c2caN (1).webp" 
export default function VadioDemo() {
    const { t } = useTranslation();

    return (
        <section className="vadio-demo-section">
            <div className="demo-card">
                <div className="content-side">
                    <h2>
                        {t("Let’s Upgrade your finances experience by using FinBiz")}
                    </h2>

                    <div className="btn-group">
                        <button className="btn-demo">{t("Request Demo")}</button>
                        <button className="btn-video">{t("Watch Video")}</button>
                    </div>
                </div>
                <div className="image-side">
                    <img
                        src={imageplan} alt="plan"
                    />
                </div>
            </div>
        </section>
    );
}