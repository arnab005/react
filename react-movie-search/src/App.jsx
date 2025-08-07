import './css/App.css';
import NavBar from './components/NavBar';
import Favorites from './Pages/Favorites';

//import { MovieCard } from './components/MovieCard'; //named export
//import MovieCard  from './components/MovieCard'; // default export
import Home from './Pages/Home';
import { Routes, Route } from 'react-router-dom';
import { MovieProvider } from './contexts/MovieContext';


function App() {

  //const movieNumber = 1;

  return (

    // <></>Fragment
    // <>
    //   <Text display="Hello"></Text>
    //   <Text display="What's Up"></Text>
    // </>

    //conditional Rendering
    // <> {movieNumber === 1 ? (<MovieCard movie={{ title:"Raaz", release_date:"2024" }}></MovieCard>) : (<MovieCard movie={{ title:"Kasoor", release_date:"2019" }}></MovieCard>)} </>

    //short circuit in javascript
    // <> { movieNumber === 1 && <MovieCard movie={{ title:"Raaz", release_date:"2024" }}></MovieCard> } </>

    // <>
    //   <Home></Home>
    // </>
    <MovieProvider>
      <NavBar />

      <main className='nain-content'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>


  )
}

// function Text({display}) {
//   return (
//     <>
//       <div>
//         <p>{display}</p>
//       </div>
//     </>
//   )
// }

export default App
