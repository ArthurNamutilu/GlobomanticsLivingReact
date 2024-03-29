import { useEffect, useState, useMemo } from "react";
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import "./main-page.css";
import Header from "./Header";
import FeaturedHouse from "./FeaturedHouse";
import SearchResults from "../search-results";
import HouseFilter from "./HouseFilter";
import HouseFromQuery from "../house/HouseFromQuery";

const App = () => {
  const [allHouses, setAllHouses] = useState([])

  useEffect(() => {
    const fetchHouses = async () => {
      const rsp = await fetch("/houses.json");  // returns response obj
      const houses = await rsp.json();
      setAllHouses(houses);
    };
    fetchHouses();
  }, [])

  const featuredHouse = useMemo(() => {
    if (allHouses.length){
      const randomIndex = Math.floor(Math.random() * allHouses.length);
      return allHouses[randomIndex];
    }
  }, [allHouses])


  return ( 
    <Router>
      <div className="container">
        <Header subtitle='Providing houses all over Kenya' />
        < HouseFilter allHouses={allHouses}/>
        <Switch>
          <Route path="/searchresults/:country">
            < SearchResults allHouses={allHouses}/>
          </Route>
          <Route path="/house/:id">
            < HouseFromQuery allHouses={allHouses} />
          </Route>
          <Route path="/">
            < FeaturedHouse house={featuredHouse} />
          </Route>
        </Switch>
      </div>
    </Router>
   );
}
 
export default App;






















// import { useEffect, useState, useMemo } from 'react';
// import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom'; 
// import Header from './Header';
// import logo from './logo.svg';
// import './main-page.css';
// import FeaturedHouse from './FeaturedHouse';


// function App() {

//   const [allHouses, setAllHouses] = useState([]);

//   useEffect(() => {
//     const fetchHouses = async () => {
//       const rsp = await fetch("/houses.json");
//       const houses = await rsp.json();
//       setAllHouses(houses);
//     };
//     fetchHouses();
//   }, []);

//   const featuredHouse = useMemo(() => {
//     if (allHouses.length) {
//       const randomIndex = Math.floor(Math.random() * allHouses.length);
//       return allHouses[randomIndex];
//     }
//   }, [allHouses]);
  
//   return (
//     <Router>
//       <div className="container">
//         <Header subtitle='Providing houses all over Kenya'/>

        
//         <Switch>
//           <Route path="/">
//             <FeaturedHouse house={featuredHouse}/>
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// export default App;
