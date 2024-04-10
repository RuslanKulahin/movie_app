import { useState } from "react";
import { Outlet } from "react-router-dom";
import { AuthContext, anonymousUser, AuthInfo } from "./AuthContext";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { AppHeader } from "./AppHeader";
import { teal } from "@mui/material/colors";

const defaultTheme = createTheme({
  palette: {
    primary: teal,
    secondary: {
      main: "#96000f",
    },
  },
});

const fakeAuth: AuthInfo = {
  user: {
    name: "Irina",
  },
};

function App() {
  const [auth, setAuth] = useState<AuthInfo>({ user: anonymousUser });
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AuthContext.Provider value={auth}>
        <AppHeader
          onLogin={() => setAuth(fakeAuth)}
          onLogout={() => setAuth({ user: anonymousUser })}
        />
        <main>
          <Outlet />
        </main>
      </AuthContext.Provider>
    </ThemeProvider>
  );
}

export default App;
