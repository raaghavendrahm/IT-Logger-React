import { useState, useEffect } from 'react';

const Logs = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getLogs();
  }, []);

  // Get Logs from backend (json-server)
  const getLogs = async () => {
    setLoading(true);
    const res = await fetch('/logs'); // url is shortened due to proxy for localhost 5000.
    const data = await res.json(); // unline axios, data shall be formatted to json in fetch API
    setLogs(data);
    setLoading(false);
  };

  if (loading) {
    return <h4>Loading..</h4>; // Materialize pre-loader will be used instead of this later
  }

  return (
    <div>
      <ul className="collection-with-header">
        <li className="collection-header">
          <h4 className="center">System Logs</h4>
        </li>
        {/* If loading is false (not loading is true) and there is no log to show, corresponding message shall be displayed. Else, the message of log to be displayed: */}
        {!loading && logs.length === 0 ? (
          <p className="center">No logs to show...</p>
        ) : (
          logs.map((log) => <li>{log.message}</li>)
        )}
      </ul>
    </div>
  );
};

export default Logs;
