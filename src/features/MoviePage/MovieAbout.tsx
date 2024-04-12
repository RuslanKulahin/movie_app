import { Movie } from "../Movies/moviesSlise";
import { Container } from "@mui/system";
import { Typography, Box, CardMedia, CardContent } from "@mui/material";

function MovieAbout({ movie }: { movie: Movie }) {
  if (movie.id === 0) {
    return (
      <Typography variant="h4" align="center" color="text.secondary" sx={{ py: 10 }} gutterBottom>
        Movie not found
      </Typography>
    );
  }
  return (
    <Container maxWidth="lg">
      <Box component="div" sx={{ bgcolor: "#e0f2f1", borderRadius: 8 }}>
        <CardMedia
          component="div"
          image={movie.image}
          sx={{ py: "25.25%", width: "100%", borderRadius: 0 }}
        />
        <CardContent sx={{ px: 5 }}>
          <Typography variant="h4" color="secondary">
            {movie.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {movie.overview}
          </Typography>
          <Typography variant="button" display="block" mt={2}>
            Popularity: {movie.popularity}
          </Typography>
        </CardContent>
      </Box>
    </Container>
  );
}

export default MovieAbout;

