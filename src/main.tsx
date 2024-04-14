import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { StrictMode, Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { LinearProgress } from "@mui/material";
import store from "./store";
import About from "./features/About/About";
import Home from "./features/Home/Home";
import { ErrorBoundary } from "./ErrorBoundary";
import { Extra } from "./features/Extra/Extra";
import { AuthCallback } from "./auth/AuthCallback";
import { StatefulAuthProvider } from "./auth/StatefulAuthProvider";
import { Profile } from "./features/Profile/Profile";
import { AuthenticatedGuard } from "./auth/AuthenticatedGuard";
import { Protected } from "./features/Protected/Protected";
// import MoviePage from "./features/MoviePage/MoviePage.tsx";

const Movies = lazy(() => import("./features/Movies/Movies"));

function AppEntrypoint() {
  return (
    <StatefulAuthProvider>
      <Provider store={store}>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </Provider>
    </StatefulAuthProvider>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppEntrypoint />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "movies",
        element: (
          <Suspense fallback={<LinearProgress sx={{ mt: 1 }} />}>
            <Movies />
          </Suspense>
        ),
      },
      {
        path: "extra",
        element: <Extra />,
      },
      {
        path: "about",
        element: <About />,
      },
      // {
      //   path: "movies/:movieId",
      //   element: <MoviePage />,
      // },
      {
        path: "profile",
        element: <AuthenticatedGuard component={Profile} />,
      },
      {
        path: "protected",
        element: <AuthenticatedGuard component={Protected} />,
      },
      {
        path: "callback",
        element: <AuthCallback />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);