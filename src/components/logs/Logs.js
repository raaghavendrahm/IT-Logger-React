import { useState, useEffect } from 'react';
import LogItem from './LogItem';
import Preloader from '../layout/Preloader';

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
    return <Preloader />;
  }

  return (
    <div>
      <ul className="collection with-header">
        <li className="collection-header">
          <h4 className="center">System Logs</h4>
        </li>
        {/* If loading is false (not loading is true) and there is no log to show, corresponding message shall be displayed. Else, the message of log to be displayed: */}
        {!loading && logs.length === 0 ? (
          <p className="center">No logs to show...</p>
        ) : (
          logs.map((log) => <LogItem log={log} key={log.id} />)
        )}
      </ul>
    </div>
  );
};

export default Logs;
