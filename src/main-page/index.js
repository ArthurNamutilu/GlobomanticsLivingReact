import { useEffect, useState } from 'react';
import Header from './Header';
import logo from './logo.svg';
import './main-page.css';


function App() {

  const [allHouses, setAllHouses] = useState([]);

  useEffect(() => {
    const fetchHouses = async () => {
      const rsp = await fetch("/houses.json");
      const houses = await rsp.json();
      setAllHouses(houses);
    };
    fetchHouses();
  }, [])

  return (
    <div className="container">
      <Header subtitle='Providing houses all over Kenya'/>
    </div>
  );
}

export default App;
