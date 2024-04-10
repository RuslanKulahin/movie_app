import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext, anonymousUser } from "../../AuthContext";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      Copyright © The Movies DB {new Date().getFullYear()}
    </Typography>
  );
}

export default function Home() {
  const { user } = useContext(AuthContext);
  const loggedin = user !== anonymousUser;
  const greeting = loggedin 
  ? `${user.name}, explore movies today with as!` 
  : 'Explore movies today with us!';

  return (
    <Box sx={{ bgcolor: "background.paper", pt: 8, pb: 8 }}>
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h3"
          align="center"
          color="text.primary"
          sx={{ pt: 4 }}
          gutterBottom
        >
          Welcome
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          {greeting}
        </Typography>
        <Stack
          sx={{ pt: 4 }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
          <Button component={RouterLink} to="/movies" variant="contained" color="secondary">Explore</Button>
        </Stack>
      </Container>
      <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
        }}
      >
        <Copyright />
      </Container>
    </Box>
  );
}