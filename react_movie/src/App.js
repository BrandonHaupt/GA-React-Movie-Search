import {useState} from "react"
import './App.css';
import MovieDisplay from './components/MovieDisplay';
import Form from './components/Form';


function App() {
  // Our API Key
  const apiKey = "194b5df3"

  //* Declares our states
  const [movie, setMovie] = useState(null)

  //! Function to get movies
  // Async tells this function we use promises
  const getMovie = async (searchTerm) => {
    // Make a fetch request and stores the repose in a variable
    const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`)

    //* Parses JSON response into a JS Object
    const data = await response.json()

    //! Then we update the Movie State
    setMovie(data)
  }

  return (
    <div class='App'>

      {/* moviesearch is a prop which is used in the form component */}
      <Form moviesearch={getMovie}/>
      <MovieDisplay movie={movie}/>
    </div>
  );
}

export default App;
