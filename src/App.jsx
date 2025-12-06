import React from "react";

const rows = Array.from({ length: 10 }).map((_, i) => ({
  id: "1234567",
  date: "2023-09-26",
  customerId: "CUST12016",
  customerName: i === 3 ? "Avan Singh" : "Neha Yadav",
  phone: "+91 9123456789",
  gender: "Female",
  age: 25,
  category: "Clothing",
  qty: "01",
  totalAmount: "₹ 1,000",
  region: "South",
}));

function App() {
  return (
    <div className="app-root">
      {/* LEFT SIDEBAR */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <div className="sidebar-logo">V</div>
          <div>
            <div className="sidebar-title">Vault</div>
            <div className="sidebar-subtitle">Ananya Yadav</div>
          </div>
        </div>

        <div className="sidebar-section">
          <div className="sidebar-section-title">Dashboard</div>
          <button className="sidebar-item sidebar-item-active">Overview</button>
        </div>

        <div className="sidebar-section">
          <div className="sidebar-section-title">Services</div>
          <button className="sidebar-item">Pre-active</button>
          <button className="sidebar-item">Active</button>
          <button className="sidebar-item">Blocked</button>
          <button className="sidebar-item">Closed</button>
        </div>

        <div className="sidebar-section">
          <div className="sidebar-section-title">Invoices</div>
          <button className="sidebar-item sidebar-item-active">
            Proforma Invoices
          </button>
          <button className="sidebar-item">Final Invoices</button>
        </div>
      </aside>

      {/* RIGHT MAIN */}
      <div className="main">
        {/* TOP BAR */}
        <header className="topbar">
          <div>
            <h1 className="topbar-title">Sales Management System</h1>
            <p className="topbar-subtitle">
              Track customer transactions and revenue
            </p>
          </div>

          <div className="topbar-search-wrapper">
            <input
              className="topbar-search-input"
              placeholder="Name, Phone no."
            />
          </div>
        </header>

        {/* CONTENT WRAPPER */}
        <div className="content">
          {/* FILTER + SUMMARY CARD AREA */}
          <div className="filters-card">
            <div className="filters-row">
              <button className="filter-icon-btn">≡</button>

              <Filter label="Customer Region" />
              <Filter label="Gender" />
              <Filter label="Age Range" />
              <Filter label="Product Category" />
              <Filter label="Tags" />
              <Filter label="Payment Method" />

              <div className="filter-date">
                <span className="filter-date-icon">📅</span>
                <span>Date</span>
              </div>

              <div className="filter-sort">
                <span className="filter-sort-label">
                  Sort by: Customer Name (A–Z)
                </span>
                <select className="filter-select-small" defaultValue="date">
                  <option value="date">Date (Newest first)</option>
                  <option value="quantity">Quantity</option>
                  <option value="name">Customer Name (A–Z)</option>
                </select>
              </div>
            </div>

            {/* SUMMARY CARDS */}
            <div className="summary-row">
              <SummaryCard
                title="Total units sold"
                value="10"
                extra="Last 24 hrs"
              />
              <SummaryCard
                title="Total Amount"
                value="₹89,000"
                extra="(49 SRs)"
              />
              <SummaryCard
                title="Total Discount"
                value="₹15,000"
                extra="(45 SRs)"
              />
            </div>
          </div>

          {/* TABLE */}
          <div className="table-card">
            <div className="table-header-title">Full table view</div>
            <div className="table-wrapper">
              <table className="sales-table">
                <thead>
                  <tr>
                    <th>Transaction ID</th>
                    <th>Date</th>
                    <th>Customer ID</th>
                    <th>Customer name</th>
                    <th>Phone Number</th>
                    <th>Gender</th>
                    <th>Age</th>
                    <th>Product Category</th>
                    <th>Quantity</th>
                    <th>Total Amount</th>
                    <th>Customer region</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, idx) => (
                    <tr key={idx}>
                      <td>{row.id}</td>
                      <td>{row.date}</td>
                      <td>{row.customerId}</td>
                      <td>{row.customerName}</td>
                      <td>{row.phone}</td>
                      <td>{row.gender}</td>
                      <td>{row.age}</td>
                      <td>{row.category}</td>
                      <td>{row.qty}</td>
                      <td>{row.totalAmount}</td>
                      <td>{row.region}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* PAGINATION */}
            <div className="pagination">
              {[1, 2, 3, 4, 5, 6].map((p) => (
                <button
                  key={p}
                  className={
                    "page-btn" + (p === 2 ? " page-btn-active" : "")
                  }
                >
                  {p}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Filter({ label }) {
  return (
    <div className="filter-group">
      <span className="filter-label">{label}</span>
      <select className="filter-select">
        <option>All</option>
      </select>
    </div>
  );
}

function SummaryCard({ title, value, extra }) {
  return (
    <div className="summary-card">
      <div className="summary-title">{title}</div>
      <div className="summary-value">{value}</div>
      <div className="summary-extra">{extra}</div>
    </div>
  );
}

export default App;
