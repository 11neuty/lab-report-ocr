import { useHealth } from '@/shared/hooks/useHealth'
import './DashboardPage.css'

export default function DashboardPage() {
  const { loading, data, error, refresh } = useHealth()

  return (
    <div className="dashboard">
      <h1 className="dashboard__title">Lab Report OCR</h1>
      <p className="dashboard__subtitle">Project Foundation Ready</p>

      <div className="dashboard__status">
        <h2 className="dashboard__status-heading">Backend Status</h2>

        {loading && (
          <p className="dashboard__loading">Loading backend status…</p>
        )}

        {!loading && data && (
          <div className="dashboard__connected">
            <span className="dashboard__dot dashboard__dot--green" />
            <p>Connected</p>
            <dl className="dashboard__details">
              <dt>Service</dt>
              <dd>{data.service}</dd>
              <dt>Version</dt>
              <dd>{data.version}</dd>
              <dt>Status</dt>
              <dd>{data.status}</dd>
            </dl>
          </div>
        )}

        {!loading && error && (
          <div className="dashboard__disconnected">
            <span className="dashboard__dot dashboard__dot--red" />
            <p>Disconnected</p>
            <p className="dashboard__error-msg">{error}</p>
          </div>
        )}

        <button
          className="dashboard__refresh"
          onClick={refresh}
          disabled={loading}
        >
          Refresh Status
        </button>
      </div>
    </div>
  )
}
