
export default function MovieDisplay( {movie} ) {
    
    //! This will only run if we have the data for the movie
    const loaded = () => {
        return(
            <div class="display">
                <div className="">
                    <h1>{movie.Title}</h1>
                    <h2>{movie.Genre}</h2>
                    <h2>{movie.Year}</h2>
                    <h3>{movie.Rated}</h3>
                </div>
               
               <div>
                <img src={movie.Poster} alt={movie.Title}/>
               </div>
    
                <p>Movie Rating: {movie.imdbRating}/10</p>
                <p>Plot - {movie.Plot}</p>
            </div>
        )
    }
   
    //! this runs only if there is no movie data
    const loading = () => {
        return <h1>No Movie to Display</h1>
    }

    //! This says if loaded it will run loaded but if false run loading function
    //! This is called Short Hand Ternary Operator
    return movie ? loaded() : loading()
    
}
