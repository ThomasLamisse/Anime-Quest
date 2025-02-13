// main.tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Import des composants
import App from "./App";
import AnimePage from "./pages/Anime/AnimePage";
import Homepage from "./pages/Homepage/Homepage";
import WebtoonPage from "./pages/Webtoon/WebtoonPage";

// Création du router avec les routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // App englobe la Navbar et les pages enfants
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/anime",
        element: <AnimePage />,
      },
      {
        path: "/webtoon",
        element: <WebtoonPage />,
      },
    ],
  },
]);

// Trouver l'élément root dans le HTML
const rootElement = document.getElementById("root");
if (rootElement == null) {
  throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}

// Rendre l'application avec le router
createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
