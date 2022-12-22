
export default function MovieDisplay({movie}) {
    return(<div class="display">
        <h1>{movie.Title}</h1>
        <img src={movie.Poster} alt={movie.Title}/>
    </div>)
}
