
import "./Vadio-demo.scss";
import { useTranslation } from "react-i18next";

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
                        src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                        alt="FinBiz Dashboard Demo"
                    />
                </div>
            </div>
        </section>
    );
}