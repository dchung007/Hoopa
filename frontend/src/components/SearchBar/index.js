import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './SearchBar.css'

const SearchBar = () => {
  const [questions, setQuestions] = useState('');
  const [questionsResults, setQuestionsResults] = useState('');
  const [dropdown, setDropdown] = useState('');
  const [searchInput, setSearchInput] = useState('');
 
  const fetchQuestions = () => {
    fetch('/api/questions/')
      .then(response => response.json())
      .then(data => setQuestions(data))
  }

  useEffect(() => {
    fetchQuestions()
  }, [])

  const handleChange = (searchWord) => {
    if (searchWord) {
      const searchQuestionsResults = questions.filter(question => {
        // console.log(question.title.toLowerCase().startsWith(searchWord.toLowerCase()))
        return question.title.toLowerCase().startsWith(searchWord.toLowerCase())
      })
      setQuestionsResults(searchQuestionsResults)
      console.log(questionsResults)
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
          placeholder="Search questions"
          onChange={(e) => handleChange(e.target.value)}
          value={searchInput}
        ></input>
      </div>
      <div className={dropdown ? "search-results" : "search-none"}>
        {dropdown && questionsResults.length ? (
          questionsResults.map(question => (
            <div key={question.id} className="search-user">
              <Link onClick={()=> clickResult()} to={`/questions/${question.id}`}>
                <div className="search-user-name">
                {question.title}
                </div>
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
