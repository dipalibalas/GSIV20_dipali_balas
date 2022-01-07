const APIKEY = "20118efccb52d0b7f949432f9103ae7b";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${APIKEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${APIKEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${APIKEY}&language=en-US`,
  fetchTopActionMovies: `/discover/movie?api_key=${APIKEY}&with_geners=28`,
  fetchTopComedyMovies: `/discover/movie?api_key=${APIKEY}&with_geners=35`,
  fetchTopHorrorMovies: `/discover/movie?api_key=${APIKEY}&with_geners=27`,
  fetchTopRomanceMovies: `/discover/movie?api_key=${APIKEY}&with_geners=10749`,
  fetchTopDocumentaries: `/discover/movie?api_key=${APIKEY}&with_geners=99`,
  fetchUpComingMovies: `/movie/upcoming?api_key=${APIKEY}&language=en-US`,
  fetchTopLatestMovies: `/movie/latest?api_key=${APIKEY}&language=en-US`,
};

export default requests;
