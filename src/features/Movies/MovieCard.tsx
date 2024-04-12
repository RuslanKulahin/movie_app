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
import { memo } from "react";

interface Props {
    id: number
    title: string;
    popularity: number;
    overview: string;
    image?: string;
    enableUserActions?: boolean;
    onAddFavorite?(id: number): void
}

function MovieCard({ 
    id, 
    title, 
    overview, 
    popularity,
    enableUserActions,
    onAddFavorite, 
    image = "./movie-thumb.png" 
  }: Props) {
    console.count("MovieCard");

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
                    <IconButton onClick={() => onAddFavorite?.(id)}>
                      <FavoriteIcon color="primary"/>
                    </IconButton>
                  </Tooltip>
                )}
            </CardActions>
        </Card>
    );
}

export default memo (MovieCard);