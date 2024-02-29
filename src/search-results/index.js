import SearchResultsRow from "./SearchResultsRow";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const SearchResults = ({ allHouses }) => {
    const { country } = useParams();
    const filteredHouse = allHouses.filter((h) => h.country === country)

    return ( 
        <div className="mt-2">
            <h4>Results for{country}:</h4>
            <table className="table table-hover">
            <tr>
                <th>Address</th>
                <th>Price</th>
            </tr>
                <tbody>
                    {filteredHouse.map((h) => (
                        <SearchResultsRow key={h.id} house={h} />
                    ))}
                </tbody>
            </table>
        </div>
     );
}
 
export default SearchResults;