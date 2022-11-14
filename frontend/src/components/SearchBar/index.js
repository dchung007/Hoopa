import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './SearchBar.css'

const SearchBar = () => {
  const [spots, setSpots] = useState('');
  const [spotsResults, setSpotsResults] = useState('');
  const [dropdown, setDropdown] = useState('');
  const [searchInput, setSearchInput] = useState('');

  const fetchSpots = () => {
    fetch('/api/questions/')
      .then(response => response.json())
      .then(data => setSpots(data))
  }

  useEffect(() => {
    fetchSpots()
  }, [])

  const handleChange = (searchWord) => {
    if (searchWord) {
      const searchSpotsResults = spots.spots.filter(spot => {
        return spot.city.toLowerCase().startsWith(searchWord.toLowerCase()) || spot.state.toLowerCase().startsWith(searchWord.toLowerCase()) || spot.country.toLowerCase().startsWith(searchWord.toLowerCase())
      })
      setSpotsResults(searchSpotsResults)
      setDropdown(true);
      setSearchInput(searchWord)
    } else {
      setSearchInput(searchWord)
      setDropdown(false)
    }
  }

  const clickResult = () => {
    setDropdown(false);
    setSearchInput('');
  }

  return (
    <div className="search-bar">
      {dropdown &&
        <div className="search-dropdown-cancel" onClick={() => clickResult()}></div>
      }
      <div className="search-field">
        <input
          placeholder="Search destinations"
          onChange={(e) => handleChange(e.target.value)}
          value={searchInput}
        ></input>
      </div>
      <div className={dropdown ? "search-results" : "search-none"}>
        {dropdown && spotsResults.length ? (
          spotsResults.map(spot => (
            <div key={spot.id} className="search-user">
              <Link onClick={()=> clickResult()} to={`/spots/${spot.id}`}>
              {spot.name}
              </Link>
            </div>
          ))
        )
          :
          (
            <div className={dropdown ? "no-show" : "no-hide"} id="no-results">No results found.</div>
          )
        }
      </div>
    </div>
  )
}

export default SearchBar;
