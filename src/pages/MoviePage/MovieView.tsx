import { Movie } from "../../reducers/movies"
import Container from "../../components/Container/Container";
import styles from './MovieView.module.scss';

function MovieView({ movie }: { movie: Movie }) {
    if(movie.id === 0) {
        return <div className={styles.text__movie_not_found}>Movie not found</div>
    }
    return (
        <Container >
            <div className={styles.content}>
                <h1>{movie.title}</h1>
                <p>{movie.overview}</p>
                <p>{movie.popularity}</p>
            </div>
        </Container>
    );
}

export default MovieView;