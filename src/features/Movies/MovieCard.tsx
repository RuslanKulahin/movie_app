import { Link as RouterLink } from "react-router-dom";
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Button,
    IconButton,
    Tooltip,
    CardActions,
} from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import About from '../About/About';

interface Props {
    id: number
    title: string;
    popularity: number;
    overview: string;
    image?: string;
    enableUserActions?: boolean;
}

function MovieCard({ 
    id, 
    title, 
    overview, 
    popularity,
    enableUserActions, 
    image = "./movie-thumb.png" 
  }: Props) {
    return (
        <Card sx={{height: "100%", display: "flex", flexDirection: "column" }} >
            <CardMedia
                component="div"
                image={image}
                sx={{ pt: "56.25%" }}
            />
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {overview}
                </Typography>
                <Typography variant="button" display="block" mt={1}>
                    {popularity}
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    color="secondary"
                    component={RouterLink}
                    to={`/movies/${id}`}
                >
                    View Details
                </Button>
                {enableUserActions && (
                  <Tooltip title="Add to favorites">
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon color="primary"/>
                    </IconButton>
                  </Tooltip>
                )}
            </CardActions>
        </Card>
    );
}

export default MovieCard;