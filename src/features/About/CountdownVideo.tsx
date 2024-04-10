import { useState, useRef } from "react";
import { Card, CardMedia, CardActions, IconButton } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PouseIcon from "@mui/icons-material/Pause";

export function CountdownVideo() {
  const [isPlaing, setPlaing] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlaing = () => {
    const nextPlaying = !isPlaing;

    if (nextPlaying) {
      videoRef.current?.play();
    } else {
      videoRef.current?.pause();
    }
  };

  return (
    <Card>
      <CardMedia>
        <video
          ref={videoRef}
          src="https://www.pexels.com/download/video/3843433"
          height="500"
          onPlay={() => setPlaing(true)}
          onPause={() => setPlaing(false)}
        />
      </CardMedia>
      <CardActions>
        <IconButton onClick={togglePlaing}>
          {isPlaing ? (
            <PouseIcon sx={{ height: 38, width: 38 }} />
          ) : (
            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
          )}
        </IconButton>
      </CardActions>
    </Card>
  );
}
