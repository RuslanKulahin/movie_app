import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import About from './features/About/About.tsx';
import Movies from './features/Movies/Movies.tsx';
import MoviePage from './features/MoviePage/MoviePage.tsx';
import { Provider } from 'react-redux';
import store from './store';
import Home from './features/Home/Home';

function AppEntrypoint() {  
  return (
    <Provider store={store}>
        <App />
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
        element: <Home />
      },
      {
        path: "movies",
        element: <Movies />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "movies/:movieId",
        element: <MoviePage />,
      },
    ]
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
