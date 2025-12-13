
import "./Vadio-demo.scss";
import { useTranslation } from "react-i18next";
import imageplan from "../../../public/erd.jpg" 
export default function VadioDemo() {
    const { t } = useTranslation();

    return (
        <section className="vadio-demo-section">
            <div className="demo-card">
                {/* Left Content */}
                <div className="content-side">
                    <h2>
                        {t("Let’s Upgrade your finances experience by using FinBiz")}
                    </h2>

                    <div className="btn-group">
                        <button className="btn-demo">{t("Request Demo")}</button>
                        <button className="btn-video">{t("Watch Video")}</button>
                    </div>
                </div>

                {/* Right Image/Video Placeholder */}
                <div className="image-side">
                    <img
                        src={imageplan}
                    />
                </div>
            </div>
        </section>
    );
}