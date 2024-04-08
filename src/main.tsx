import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.scss';
import About from './features/About/About.tsx';
import Movies from './features/Movies/Movies.tsx';
import MoviePage from './pages/MoviePage/MoviePage.tsx';
import { Provider } from 'react-redux';
import store from './store';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Provider store={store}><App /></Provider>,
    children: [
      {
        path: "about",
        element: <About />,
      },
      {
        path: "movies",
        element: <Movies />,
      },
      {
        path: "movies/:movieId",
        element: <MoviePage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
