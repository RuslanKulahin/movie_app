import { useParams } from 'react-router-dom';
import { connect } from "react-redux";
import { RootState } from "../../store";
import { Movie } from "../../reducers/movies";
import Container from "../../components/Container/Container";
import MovieView from './MovieView';
import styles from "./MoviePage.module.scss";

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
        adult: false,
        backdrop_path: '',
        genre_ids: [],
        original_language: '',
        original_title: '',
        poster_path: '',
        release_date: '',
        video: false,
        vote_average: 0,
        vote_count: 0,
    }

    if (!movieId) {
        return <div className={styles.text__movie_not_found}>Movie not found</div>
    }

    const movieIdNumber = parseInt(movieId, 10);

    return (
        <Container >
            <MovieView movie={movies.find(m => m.id === movieIdNumber) ?? defaultMovie} />
        </Container>
    );
}

const mapStateToProps = (state: RootState) => ({
    movies: state.movies.top
})

const connector = connect(mapStateToProps)

export default connector(MoviePage);
