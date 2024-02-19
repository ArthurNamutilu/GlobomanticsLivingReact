import { useEffect, useState, useMemo } from 'react';
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
  }, []);

  let featuredHouse = useMemo(() => {
    if (allHouses.length) {
      const randomIndex = Math.floor(Math.random() * allHouses.length);
      return allHouses[randomIndex];
    }
  }, [allHouses]);
  
  return (
    <div className="container">
      <Header subtitle='Providing houses all over Kenya'/>
    </div>
  );
}

export default App;
