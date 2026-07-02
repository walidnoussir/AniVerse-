import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import HomePage from "./pages/HomePage";
import AnimePage from "./pages/AnimePage";
import CharactersPage from "./pages/CharactersPage";
import FavoritesPage from "./pages/FavoritesPage";
import LibraryPage from "./pages/LibraryPage";
import DashboardPage from "./pages/DashboardPage";
import AnimeDetailsPage from "./pages/AnimeDetailsPage";
import PageNotFound from "./pages/PageNotFound";

import AppLayout from "./components/AppLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<HomePage />} />
            <Route path="anime" element={<AnimePage />} />
            <Route path="anime/:id" element={<AnimeDetailsPage />} />
            <Route path="characters" element={<CharactersPage />} />
            <Route path="favorites" element={<FavoritesPage />} />
            <Route path="library" element={<LibraryPage />} />
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>

      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={12}
        toastOptions={{
          duration: 3000,

          style: {
            background: "#171f33",
            color: "#dae2fd",
            border: "1px solid #464554",
            borderRadius: "12px",
            padding: "16px",
          },

          success: {
            iconTheme: {
              primary: "#22c55e",
              secondary: "#fff",
            },
          },

          error: {
            iconTheme: {
              primary: "#ef4444",
              secondary: "#fff",
            },
          },
        }}
      />
    </>
  );
}

export default App;
