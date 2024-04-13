// import { useParams } from "react-router-dom";
// import { Container } from "@mui/system";
// import { Box } from "@mui/material";
// import MovieAbout from "./MovieAbout";
// import { useGetMoviesQuery } from "../../services/tmdb";
// import { MovieDetails } from "../../services/tmdb";

// function MoviePage() {
//   const { movieId } = useParams();
//   const { data, isFetching } =useGetMoviesQuery(query);
//   const movies = data?.results;

//   const ErrorMovie: MovieDetails = {
//     id: 0,
//     popularity: 0,
//     overview: "",
//     title: "",
//     adult: false,
//     genre_ids: [],
//     original_language: "",
//     original_title: "",
//     poster_path: "",
//     release_date: "",
//     video: false,
//     vote_average: 0,
//     vote_count: 0,
//   };

//   function getMovieId(movieId: string | undefined) {
//     return typeof movieId === "string" ? parseInt(movieId, 10) : ErrorMovie;
//   }

//   return (
//     <Box component="div" sx={{ width: "100%", height: "100vh", bgcolor: "#80cbc4" }}>
//       <Container sx={{ py: 8 }} maxWidth="lg">
//         <MovieAbout movie={movies?.find((m) => m.id === getMovieId(movieId)) || ErrorMovie} />
//       </Container>
//     </Box>
//   );
// }

// export default MoviePage;
