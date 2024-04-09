import { useEffect } from "react";
import { connect } from "react-redux";
import { RootState } from "../../store";
import { useAppDispatch } from "../../hooks";
import { Movie, fetchMovies } from "./moviesSlise";
import { Container } from "@mui/system";
import { Typography, LinearProgress, Grid } from "@mui/material";
import MovieCard from "./MovieCard";

interface Props {
    movies: Movie[];
    loading: boolean;
}

function Movies({ movies, loading }: Props) {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchMovies());
    }, [dispatch]);

    return (
        <Container sx={{ py: 8 }} maxWidth="lg">
            <Typography variant="h5" sx={{ py: 2 }} align="center" gutterBottom>
                Now playing
            </Typography>
            {loading ? (
                <LinearProgress color="secondary" />
            ) : (
                <Grid container spacing={4} >
                    {movies.map((m) => (
                        <Grid item key={m.id} xs={12} sm={6} md={4}>
                            <MovieCard
                                id={m.id}
                                title={m.title}
                                overview={m.overview}
                                popularity={m.popularity}
                                image={m.image}
                            />
                        </Grid>
                    ))}
                </Grid>
            )}
        </Container>
    );
}

const mapStateToProps = (state: RootState) => ({
    movies: state.movies.top,
    loading: state.movies.loading,
});

const connector = connect(mapStateToProps);

export default connector(Movies);
