import "../css/Dashboard.css";

function Dashboard() {
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "/";
  };

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1 className="dashboard-logo">IPO Varum</h1>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </header>

      <aside className="dashboard-sidebar">
        <ul>
          <li>Home</li>
          <li>Demat Accounts</li>
          <li>Apply IPO</li>
          <li>Allotments</li>
          <li>Profile</li>
        </ul>
      </aside>

      <main className="dashboard-main">
        <h2>Welcome, Admin!</h2>
        <div className="dashboard-cards">
          <div className="card">
            <h3>Total Demat Accounts</h3>
            <p>3</p>
          </div>
          <div className="card">
            <h3>Active IPOs</h3>
            <p>2</p>
          </div>
          <div className="card">
            <h3>Applied IPOs</h3>
            <p>5</p>
          </div>
          <div className="card">
            <h3>Allotted IPOs</h3>
            <p>1</p>
          </div>
        </div>

        <div className="ipo-table">
          <h3>IPO Applications</h3>
          <table>
            <thead>
              <tr>
                <th>IPO Name</th>
                <th>Application Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>IPO XYZ</td>
                <td>2026-01-18</td>
                <td>Allotted</td>
              </tr>
              <tr>
                <td>IPO ABC</td>
                <td>2026-01-17</td>
                <td>Pending</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
