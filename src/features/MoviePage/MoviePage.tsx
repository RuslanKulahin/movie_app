import { useParams } from 'react-router-dom';
import { connect } from "react-redux";
import { RootState } from "../../store";
import { Movie } from "../Movies/moviesSlise";
import { Container } from "@mui/system";
import { Typography, Box } from "@mui/material";
import MovieView from './MovieAbout';

interface Props {
    movies: Movie[];
}

function MoviePage({ movies }: Props) {
    const { movieId } = useParams();

    const defaultMovie: Movie = {
        id: 0,
        title: "Movie not found",
        overview: "",
        popularity: 0,
        image: '',
    }

    if (!movieId) {
        return <Typography variant="h4" align="center" color="text.secondary" gutterBottom >Movie not found</Typography>
    }

    const movieIdNumber = parseInt(movieId, 10);

    return (
        <Box component="div" sx={{width: '100%', height: '100vh', bgcolor: '#80cbc4' }}>
            <Container sx={{ py: 8 }} maxWidth="lg" >
                <MovieView movie={movies.find(m => m.id === movieIdNumber) ?? defaultMovie} />
            </Container>
        </Box>
    );
}

const mapStateToProps = (state: RootState) => ({
    movies: state.movies.top
})

const connector = connect(mapStateToProps)

export default connector(MoviePage);
