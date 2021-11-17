import { useState, useEffect } from 'react';
import TechItem from './TechItem';

const TechListModal = () => {
  const [techs, setTechs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getTechs();
  }, []);

  // Get Techs from backend (json-server)
  const getTechs = async () => {
    setLoading(true);
    const res = await fetch('/techs'); // url is shortened due to proxy for localhost 5000.
    const data = await res.json(); // unline axios, data shall be formatted to json in fetch API
    setTechs(data);
    setLoading(false);
  };

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>Technician List</h4>
        <ul className="collection">
          {/* If done loading, map through 'techs' array: */}
          {!loading &&
            techs.map((tech) => <TechItem tech={tech} key={tech.id} />)}
        </ul>
      </div>
    </div>
  );
};

export default TechListModal;
