import { Badge } from "@/components/Badge";

export default function AdminPage() {
  return (
    <main className="page-shell">
      <div className="container admin-panel">
        <div className="section-header">
          <h2>Panel Admin</h2>
          <Badge label="Admin" color="#ef4444" />
        </div>

        <div className="stats-grid admin-grid">
          <div><strong>1.2K</strong><span>Users</span></div>
          <div><strong>320</strong><span>Anime</span></div>
          <div><strong>42</strong><span>Comments hidden</span></div>
          <div><strong>8</strong><span>Pengumuman aktif</span></div>
        </div>

        <div className="panel-card table-card">
          <h3>Management</h3>
          <table>
            <thead>
              <tr>
                <th>User</th>
                <th>Role</th>
                <th>EXP</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>AnimeNoxa</td>
                <td><Badge label="Developer" color="#22c55e" /></td>
                <td>15240</td>
                <td>Verified</td>
              </tr>
              <tr>
                <td>Renji</td>
                <td><Badge label="Moderator" color="#a855f7" /></td>
                <td>9800</td>
                <td>Active</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
