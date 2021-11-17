import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import { useEffect } from 'react';
import SearchBar from './components/layout/SearchBar';
import Logs from './components/logs/Logs';
import AddBtn from './components/layout/AddBtn';

const App = () => {
  useEffect(() => {
    // Initialize Materialize JS
    M.AutoInit();
  });
  return (
    <>
      <SearchBar />
      <div className="container">
        <AddBtn />
        {/* AddBtn can be added below Logs too */}
        <Logs />
      </div>
    </>
  );
};

export default App;
