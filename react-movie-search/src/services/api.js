const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "3ed52901a4112a34405f82f5c3c0c0fe";

export const getPopularMovies = async () => {
  const response = await fetch(
    `${API_BASE_URL}/movie/popular?api_key=${API_KEY}`
  );
  const data = await response.json();
  return data.results;
};

export const searchMovie = async (searchKey) => {
  const response = await fetch(
    `${API_BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      searchKey
    )}`
  );
  const data = await response.json();
  console.log(data);
  return data.results;
};
