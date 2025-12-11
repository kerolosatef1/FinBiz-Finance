
import "./Payment.scss";
import { FaCheck } from "react-icons/fa6";
import { BsStars } from "react-icons/bs";
import { MdOutlineDiamond } from "react-icons/md"; // Example icon for Badge
import { useTranslation } from "react-i18next";

interface PricingPlan {
    id: number;
    title: string;
    description: string;
    price: string;
    features: string[];
    buttonText: string;
    buttonVariant: "outline" | "white" | "green";
    isPopular?: boolean;
}

export default function Payment() {
    const { t } = useTranslation();

    const plans: PricingPlan[] = [
        {
            id: 1,
            title: t("Basic"),
            description: t("Get a professional website designed according to your needs."),
            price: "$499",
            features: [
                t("Get a fully designed Website."),
                t("Webflow Development"),
                t("Limited Support")
            ],
            buttonText: t("Get started"),
            buttonVariant: "outline"
        },
        {
            id: 2,
            title: t("Pro"),
            description: t("Get a professional website designed according to your needs."),
            price: "$499",
            features: [
                t("Get a fully designed Website."),
                t("Webflow Development"),
                t("Limited Support"),
                t("Standart integrations"),
                t("Email support"),
                t("Email support")
            ],
            buttonText: t("Get started"),
            buttonVariant: "white",
            isPopular: true
        },
        {
            id: 3,
            title: t("Enterprise"),
            description: t("Get a professional website designed according to your needs."),
            price: "$999",
            features: [
                t("Get a fully designed Website."),
                t("Webflow Development"),
                t("Limited Support"),
                t("Standart integrations"),
                t("Email support"),
                t("Email support"),
                t("Email support"),
                t("Email support")
            ],
            buttonText: t("Contact Us"),
            buttonVariant: "green"
        }
    ];

    return (
        <section className="payment-section">
            <div className="header">
                <div className="pricing-badge">
                    <MdOutlineDiamond /> {t("Pricing")}
                </div>
                <h2>{t("Find the right plan")}</h2>
                <p>
                    {t("Invest in your company's future with our comprehensive financial solution. Contact us for pricing details and see how we can help you streamline your finances and reach your business goals.")}
                </p>
            </div>

            <div className="pricing-grid">
                {plans.map((plan) => (
                    <div key={plan.id} className="pricing-card">
                        {plan.isPopular && (
                            <div className="popular-badge">
                                <BsStars /> {t("Popular")}
                            </div>
                        )}

                        <h3 className="card-title">{plan.title}</h3>
                        <p className="card-desc">{plan.description}</p>

                        <div className="price">
                            {plan.price}<span>{t("/month")}</span>
                        </div>

                        <div className="features-list">
                            {plan.features.map((feature, idx) => (
                                <div key={idx} className="feature-item">
                                    <FaCheck /> {feature}
                                </div>
                            ))}
                        </div>

                        <button className={`action-btn btn-${plan.buttonVariant}`}>
                            {plan.buttonText}
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}