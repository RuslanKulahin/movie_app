import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./features/About/About.tsx";
import MoviePage from "./features/MoviePage/MoviePage.tsx";
import { Provider } from "react-redux";
import store from "./store";
import Home from "./features/Home/Home";
import { ErrorBoundary } from "./ErrorBoundary";

function AppEntrypoint() {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </Provider>
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
        lazy: () => import("./features/Movies/Movies"),
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "movies/:movieId",
        element: <MoviePage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

