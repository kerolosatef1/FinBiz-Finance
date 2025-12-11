import "./BoostingBusiness.scss";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Filler
} from "chart.js";
import { Line } from "react-chartjs-2";
import { FaArrowUp, FaFilePdf, FaEllipsisV } from "react-icons/fa";
import { useTranslation } from "react-i18next";

// Register ChartJS
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Filler
);

export default function BoostingBusiness() {
    const { t } = useTranslation();

    const chartOptionsSmall = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false }, tooltip: { enabled: false } },
        scales: {
            x: { display: false },
            y: { display: false, min: 0 }
        },
        elements: {
            line: { tension: 0.4 }
        }
    };

    const dataSmall = {
        labels: ["1", "2", "3", "4", "5", "6", "7"],
        datasets: [
            {
                data: [10, 25, 15, 30, 20, 35, 45],
                borderColor: "#37D67A",
                borderWidth: 2,
                pointRadius: 0,
            }
        ]
    };

    const dataLarge = {
        labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
        datasets: [
            {
                data: [20, 40, 30, 50, 40, 60, 55, 70, 60, 80],
                borderColor: "#2F80ED",
                borderWidth: 2,
                pointRadius: 0,
            },
            {
                data: [10, 20, 15, 25, 20, 30, 25, 35, 30, 40],
                borderColor: "#666",
                borderDash: [5, 5],
                borderWidth: 1,
                pointRadius: 0,
            }
        ]
    };

    return (
        <section className="boosting-business-section">
            <div className="grid-container">
                <div className="b-card card-analytics">
                    <div>
                        <h3>{t("Simple analytics")}</h3>
                        <p>{t("Make informed decisions backed by data through our analytics tools.")}</p>
                    </div>
                    <div className="bg-analytics">
                        <div className="analytics-badge">
                            <FaArrowUp /> 14.12%
                        </div>

                        <div className="chart-wrapper-small">
                            <Line data={dataSmall} options={chartOptionsSmall} />
                        </div>
                    </div>
                </div>

                {/* 2. Boosting Business */}
                <div className="b-card card-boosting">
                    <h3>{t("Boosting Business. Today and Tomorrow.")}</h3>
                    <p>
                        {t("Bring harmony to team expenses with budget limits and real-time monitoring. Freedom for your staff. Peace of mind for you.")}
                    </p>

                    <div className="chart-wrapper-large">
                        <Line data={dataLarge} options={chartOptionsSmall} />
                    </div>
                </div>

                {/* 3. Easy Collaboration */}
                <div className="b-card card-collab">
                    <h3>{t("Easy collaboration")}</h3>
                    <p>{t("Seamlessly collaborate with your team members like never before.")}</p>

                    <div className="avatar-group">
                        {/* Placeholders for avatars using styled divs */}
                        <div className="avatar" style={{ backgroundColor: '#FFADAD' }}></div>
                        <div className="avatar" style={{ backgroundColor: '#FFD6A5' }}></div>
                        <div className="avatar" style={{ backgroundColor: '#FDFFB6' }}></div>
                        <div className="avatar" style={{ backgroundColor: '#CAFFBF' }}></div>
                        <div className="avatar" style={{ backgroundColor: '#9BF6FF' }}></div>
                    </div>
                </div>

                {/* 4. Real-time Accounting */}
                <div className="b-card card-accounting">
                    <div className="text-content">
                        <h3>{t("Real-time accounting at your fingertips.")}</h3>
                        <p>
                            {t("Take the pain out of bookkeeping! Wave goodbye to mountains of paperwork and endless email reminders. There's now a new way of accounting.")}
                        </p>

                        <div className="price-display">$3453.00</div>
                        {/* Mock lines */}
                        <div style={{ width: '60%', height: '4px', background: '#333', borderRadius: '2px', marginTop: '10px' }}></div>
                        <div style={{ width: '40%', height: '4px', background: '#333', borderRadius: '2px', marginTop: '8px' }}></div>
                    </div>

                    <div className="invoice-list">
                        <div className="invoice-card-mock">
                            <h4>MonthlyInvoice</h4>

                            {[
                                { name: "John Client_download.Pdf", color: "#FFADAD" },
                                { name: "Michele Leos_download.Pdf", color: "#9BF6FF" },
                                { name: "John Smith_download.Pdf", color: "#CAFFBF" }
                            ].map((item, idx) => (
                                <div key={idx} className="invoice-item">
                                    <div className="icon-circle" style={{ background: item.color, color: '#000' }}>
                                        <FaFilePdf />
                                    </div>
                                    <div className="invoice-details">
                                        <span className="name">{item.name}</span>
                                    </div>
                                    <FaEllipsisV color="#666" size={12} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 5. Optimise Expense */}
                <div className="b-card card-optimise">
                    <div>
                        <h3>{t("Optimise expense Management as a team")}</h3>
                        <p>
                            {t("Bring harmony to team expenses with budget limits and real-time monitoring. Freedom for your staff. Peace of mind for you.")}
                        </p>
                    </div>

                    <button className="explore-btn">{t("Explore more")}</button>
                </div>

            </div>
        </section>
    );
}