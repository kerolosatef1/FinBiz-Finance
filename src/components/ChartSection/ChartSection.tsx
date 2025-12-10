import "./ChartSection.scss";

export default function ChartSection() {
  return (
    <div className="dashboard-grid">
      <div className="stats-cards">
        <div className="card">
            
            <p>Total Profit</p>
            <p>+18.23</p>
            <h4>$350.240</h4>
            
            </div>
        <div className="card">Total Revenue</div>
        <div className="card">Product Sold</div>
      </div>

      <div className="left-sidebar">
        <div className="box">Total Balance</div>
        <div className="box">Total Income</div>
        <div className="box">Total Expense</div>
      </div>

      <div className="chart-box">
        <canvas id="spendChart"></canvas>
      </div>

      <div className="right-sidebar">
        <div className="box">Employee</div>
        <div className="box">Contractors</div>
        <div className="box">Stakeholders</div>
      </div>
    </div>
  );
}
