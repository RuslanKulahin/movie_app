import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import { Stack, AppBar, Toolbar, Link, Typography, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext, anonymousUser } from "./AuthContext";

function HeaderLink({ children, to }: { to: string; children: React.ReactNode }) {
  return (
    <Link component={RouterLink} to={to} variant="button" color="inherit" sx={{ my: 1, mx: 1.5 }}>
      {children}
    </Link>
  );
}

interface AuthHeaderProps {
  onLogin(): void;
  onLogout(): void;
}

export function AppHeader({ onLogin, onLogout }: AuthHeaderProps) {
  return (
    <AppBar position="static">
      <Toolbar>
        <HeaderLink to="/">
          <LiveTvOutlinedIcon sx={{ mr: 2, mt: 0.7 }} />
        </HeaderLink>
        <Typography variant="h6" color="inherit" noWrap>
          The Movies DB
        </Typography>
        <Stack direction="row" spacing={2} sx={{ ml: 4, flexGrow: 1 }}>
          <HeaderLink to="/">Home</HeaderLink>
          <HeaderLink to="/about">About</HeaderLink>
          <HeaderLink to="/movies">Movies</HeaderLink>
        </Stack>
        <AuthSection onLogin={onLogin} onLogout={onLogout} />
      </Toolbar>
    </AppBar>
  );
}

interface AuthSectionProps {
  onLogin(): void;
  onLogout(): void;
}

function AuthSection({ onLogin, onLogout }: AuthSectionProps) {
  const { user } = useContext(AuthContext);
  const loggedin = user !== anonymousUser;

  if (loggedin) {
    return (
      <>
        <Typography variant="body1" sx={{ mr: 3 }}>
          Hello, {user.name}!
        </Typography>
        <Button color="inherit" variant="outlined" onClick={onLogout}>
          Log out
        </Button>
      </>
    );
  }

  return (
    <Button color="inherit" variant="outlined" onClick={onLogin}>
      Log in
    </Button>
  );
}
