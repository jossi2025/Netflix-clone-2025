const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;
const request  = {
    
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213` ,
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US` ,
    fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US` ,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28` ,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35` ,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27` ,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749` ,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99` ,
    fetchTvShow: `tv/popular?api_key=${API_KEY}&language=en-US` ,
};

export default request
