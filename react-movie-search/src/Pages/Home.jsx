import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import '../css/Home.css';
import { searchMovie, getPopularMovies } from "../services/api"



function Home() {

    const [searchQuery, setSearchQuery] = useState("");

    // const movies = [s
    //     { id: 1, title: "Raaz", release_date: "2006" },
    //     { id: 2, title: "Kasoor", release_date: "2008" },
    //     { id: 3, title: "DilSe", release_date: "2012" }
    // ];


    //this below function will call every single time anything in the below component change.
    //const movies = getPopularMovies();

    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    //useEffect(() => { }, []) // useEffect hook allows you to add side effects to your functions 
    // or to your components and define when they should run.

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies);
                console.log(popularMovies)
            } catch (err) {
                console.log(err);
                setError("Failed to load movies..")
            } finally {
                setLoading(false);
            }
        }
        loadPopularMovies()
    }, [])

    // const handleSearch = (e) => {
    //     e.preventDefault()
    //     alert(searchQuery)
    //     setSearchQuery("------")
    // };

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!searchQuery.trim()) return;
        if (loading) return;

        setLoading(true);

        try {
            const searchResult = await searchMovie(searchQuery);
            setMovies(searchResult);
            setError(null)
        } catch (err) {
            console.log(err);
            setError("Failed to search movies ...");
        } finally {
            setLoading(false);
        }

        //setSearchQuery("");
    };

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    placeholder="Search for movies..."
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}>
                </input>


                <button type="submit" className="search-button">Search</button>
            </form>

            {error && <div className="error-message">{error}</div>}

            {loading ? (<div className="loading">Loading....</div>) :
                (<div className="movies-grid">
                    {movies.map(
                        (movie) =>
                            movie.title.toLowerCase().startsWith(searchQuery) && (
                                <MovieCard movie={movie} key={movie.id}></MovieCard>)
                    )}
                </div>)}


        </div>
    );
}

export default Home;