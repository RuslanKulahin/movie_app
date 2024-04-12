import { useParams } from "react-router-dom";
import { useAppSelector } from "../../hooks";
import { Movie } from "../Movies/moviesSlise";
import { Container } from "@mui/system";
import { Box } from "@mui/material";
import MovieAbout from "./MovieAbout";


function MoviePage() {
  const { movieId } = useParams();

  const movies = useAppSelector((state) => state.movies.top);

  const ErrorMovie: Movie = {
    id: 0,
    popularity: 0,
    overview: "",
    title: "",
  };

  function getMovieId(movieId: string | undefined) {
    return typeof movieId === "string" ? parseInt(movieId, 10) : ErrorMovie;
  }

  return (
    <Box component="div" sx={{ width: "100%", height: "100vh", bgcolor: "#80cbc4" }}>
      <Container sx={{ py: 8 }} maxWidth="lg">
        <MovieAbout movie={movies.find((m) => m.id === getMovieId(movieId)) || ErrorMovie} />
      </Container>
    </Box>
  );
}

export default MoviePage;
