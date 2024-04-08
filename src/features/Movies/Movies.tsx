import { useEffect } from "react";
import { connect } from "react-redux";
import { RootState } from "../../store";
import { useAppDispatch } from "../../hooks";
import { Movie, fetchMovies } from "../../reducers/movies";
import Container from "../../components/Container/Container";
import MovieCard from "./MovieCard";
import styles from "./Movies.module.scss";

interface Props {
    movies: Movie[];
    loading: boolean;
}

function Movies({ movies, loading }: Props) {
    const dispatch = useAppDispatch();

    useEffect(()=> {
      dispatch(fetchMovies());
    }, [dispatch])

    return (
        <Container >
            <div className={styles.list}>
                {loading ? (
                <h3>Loading...</h3>
                ) : (
                movies.map(m => (
                    <MovieCard
                        key={m.id}
                        id={m.id}
                        title={m.title}
                        overview={m.overview}
                        popularity={m.popularity}
                        image={m.image}
                    />
                )))
                }
            </div>
        </Container>
    );
}

const mapStateToProps = (state: RootState) => ({
    movies: state.movies.top,
    loading: state.movies.loading
})

const connector = connect(mapStateToProps)

export default connector(Movies);