import { useEffect, useMemo, useState } from "react";
import { Heart, Search, Star, Trash2, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Spinner from "../components/ui/Spinner";
import Error from "../components/ui/Error";
import {
  fetchFavorites,
  removeFavoriteThunk,
} from "../features/favorites/favotiteSlice";

function FavoritesPage() {
  const dispatch = useDispatch();

  const { favorites, isLoading, error } = useSelector(
    (state) => state.favorites,
  );

  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(fetchFavorites());
  }, []);

  const filteredFavorites = useMemo(() => {
    return favorites.filter((anime) =>
      anime.title.toLowerCase().includes(search.toLowerCase()),
    );
  }, [favorites, search]);

  if (isLoading) return <Spinner />;

  if (error) return <Error error={error} />;

  return (
    <section className="section py-12 space-y-10">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h1>Favorites</h1>

          <p className="mt-3">
            Keep track of your favorite anime and quickly access them anytime.
          </p>
        </div>

        <div className="relative w-full lg:w-96">
          <Search
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted"
          />

          <input
            type="text"
            placeholder="Search favorites..."
            className="input pl-12"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="flex items-center justify-between rounded-xl border border-white/5 bg-card px-6 py-4">
        <div>
          <p className="text-text-muted text-sm">Total Favorites</p>

          <h2>{favorites.length}</h2>
        </div>

        <div className="flex items-center gap-2 text-primary">
          <Heart className="fill-current" size={22} />
          <span className="font-semibold">Your Collection</span>
        </div>
      </div>

      {filteredFavorites.length === 0 ? (
        <div className="card py-20 text-center">
          <Heart size={60} className="mx-auto mb-6 text-primary" />

          <h2>No Favorites Yet</h2>

          <p className="mt-3">Start adding anime to your favorites.</p>

          <Link to="/anime" className="btn-primary mt-8 inline-flex">
            Browse Anime
          </Link>
        </div>
      ) : (
        <div className="anime-grid">
          {filteredFavorites.map((anime) => (
            <div
              key={anime.id}
              className="card overflow-hidden transition duration-300 hover:-translate-y-2 hover:border-primary/30"
            >
              <img
                src={anime.image}
                alt={anime.title}
                className="h-80 w-full object-cover"
              />

              <div className="space-y-4 p-5">
                <div>
                  <h3 className="line-clamp-1">{anime.title}</h3>

                  <div className="mt-2 flex items-center gap-2 text-accent">
                    <Star size={16} className="fill-current" />

                    <span>{anime.score}</span>
                  </div>
                </div>

                <div className="space-y-1 text-sm text-text-muted">
                  <p>Episodes: {anime.episodes ?? "Unknown"}</p>

                  <p>{anime.status}</p>
                </div>

                <div className="flex gap-3 pt-2">
                  <Link
                    to={`/anime/${anime.malId}`}
                    className="btn-primary flex-1 flex items-center justify-center gap-2"
                  >
                    <Eye size={18} />
                    View
                  </Link>

                  <button
                    onClick={() => dispatch(removeFavoriteThunk(anime.id))}
                    className="btn-secondary px-4"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default FavoritesPage;
