import React from "react";
import { Link as RouterLink, Outlet } from "react-router-dom";
import { Stack, CssBaseline, AppBar, Toolbar, Link, ThemeProvider, createTheme, Typography } from "@mui/material";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import { teal } from "@mui/material/colors";


const defaultTheme = createTheme({
  palette: {
    primary: teal,
    secondary: {
      main: "#96000f",
    },
  },
});

function HeaderLink({
    children,
    to,
}: {
    to: string;
    children: React.ReactNode;
}) {
    return (
        <Link
            component={RouterLink}
            to={to}
            variant="button"
            color="inherit"
            sx={{ my: 1, mx: 1.5 }}
        >
            {children}
        </Link>
    );
}

function App() {
    return (
        <ThemeProvider theme={defaultTheme} >
            <CssBaseline />
            <AppBar>
                <Toolbar>
                    <HeaderLink to="/">
                        <LiveTvOutlinedIcon sx={{ mr: 2, mt:0.7 }} />
                    </HeaderLink>
                    <Typography variant="h6" color="inherit" noWrap >
                      The Movies DB
                    </Typography>
                    <Stack direction="row" spacing={2} sx={{ ml: 4 }}>
                        <HeaderLink to="/">Home</HeaderLink>
                        <HeaderLink to="/about">About</HeaderLink>
                        <HeaderLink to="/movies">Movies</HeaderLink>
                    </Stack>
                </Toolbar>
            </AppBar>
            <main>
                <Outlet />
            </main>
        </ThemeProvider>
    );
}

export default App;
