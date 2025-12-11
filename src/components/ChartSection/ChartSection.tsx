import "./ChartSection.scss";
import ChartComponent from "../Chart/Chart";
import HorizontalBar from "../HorizintalBar/HorizintalBar";
import { useTranslation } from "react-i18next";

export default function ChartSection() {
  const { t } = useTranslation();

  return (
    <div className="chart-section">
      {/* Top Stats Cards */}
      <div className="stats-cards">
        <div className="card">
          <div className="card-header">
            <span className="card-title">{t("Total Profit")}</span>
            <span className="card-percentage positive">+18.23</span>
          </div>
          <div className="card-value">$350.240</div>
        </div>
        <div className="card">
          <div className="card-header">
            <span className="card-title">{t("Total Revenue")}</span>
            <span className="card-percentage positive">+28.45</span>
          </div>
          <div className="card-value">$400.690</div>
        </div>

        <div className="card">
          <div className="card-header">
            <span className="card-title">{t("Product Sold")}</span>
            <span className="card-percentage positive">+28.35</span>
          </div>
          <div className="card-value">$200.000</div>
        </div>
      </div>

      <div className="dashboard-content">
        {/* Left Sidebar */}
        <div className="left-sidebar">
          <div className="box balance-box">
            <p>{t("Total Balance")}</p>
            <h3>$350.240</h3>
            <button>{t("Transfer")}</button>
          </div>
          <div className="box info-box">
            <p>{t("Total Income")}</p>
            <h3>$320.000</h3>
          </div>
          <div className="box info-box">
            <p>{t("Total Expense")}</p>
            <h3>$220.000</h3>
          </div>
        </div>
        {/* Center Chart */}
        <div className="chart-container">

          <ChartComponent />
        </div>

        {/* Right Sidebar */}
        <div className="right-sidebar">

          {/* 1 - Employee */}
          <HorizontalBar
            title={t("Employees")}
            label1={t("Team A")}
            label2={t("Team B")}
            data1={40}
            data2={55}
            color1="#A3DC2F"
            color2="#3CF5C7"
          />

          {/* 2 - Independent Contractor */}
          <HorizontalBar
            title={t("Independent Contractors")}
            label1={t("Group A")}
            label2={t("Group B")}
            data1={30}
            data2={45}
            color1="#FFB020"
            color2="#FF7A50"
          />


          <HorizontalBar
            title={t("Contracted Employees")}
            label1={t("Dept A")}
            label2={t("Dept B")}
            data1={50}
            data2={60}
            color1="#5A8DEE"
            color2="#1E88E5"
          />

          {/* 4 - Stakeholders */}
          <HorizontalBar
            title={t("Stakeholders")}
            label1={t("Internal")}
            label2={t("External")}
            data1={20}
            data2={35}
            color1="#E93D82"
            color2="#FF6BA2"
          />
        </div>

      </div>
    </div>
  );
}
