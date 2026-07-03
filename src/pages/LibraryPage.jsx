import { useEffect, useMemo, useState } from "react";
import { Search, BookOpen, Eye, Trash2, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Spinner from "../components/ui/Spinner";
import Error from "../components/ui/Error";
import {
  deleteFromLibraryThunk,
  fetchLibraries,
} from "../features/library/librarySlice";

function LibraryPage() {
  const dispatch = useDispatch();

  const { library, isLoading, error } = useSelector((state) => state.library);

  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(fetchLibraries());
  }, [dispatch]);

  const filteredLibrary = useMemo(() => {
    return library.filter((anime) =>
      anime.title.toLowerCase().includes(search.toLowerCase()),
    );
  }, [library, search]);

  if (isLoading) return <Spinner />;

  if (error) return <Error error={error} />;

  return (
    <section className="section py-12 space-y-10">
      {/* Header */}

      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h1>My Library</h1>

          <p className="mt-3">
            Your personal collection of anime to watch, revisit, and enjoy.
          </p>
        </div>

        <div className="relative w-full lg:w-96">
          <Search
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted"
          />

          <input
            type="text"
            placeholder="Search library..."
            className="input pl-12"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Stats */}

      <div className="card flex items-center justify-between px-6 py-4">
        <div>
          <p className="text-sm text-text-muted">Total Anime</p>

          <h2>{library.length}</h2>
        </div>

        <div className="flex items-center gap-2 text-primary">
          <BookOpen size={22} />

          <span className="font-semibold">Your Library</span>
        </div>
      </div>

      {/* Empty State */}

      {filteredLibrary.length === 0 ? (
        <div className="card py-20 text-center">
          <BookOpen size={60} className="mx-auto mb-6 text-primary" />

          <h2>Your Library is Empty</h2>

          <p className="mt-3">
            Add anime to your library to keep track of what you want to watch.
          </p>

          <Link to="/anime" className="btn-primary mt-8 inline-flex">
            Browse Anime
          </Link>
        </div>
      ) : (
        <div className="anime-grid">
          {filteredLibrary.map((anime) => (
            <div
              key={anime.id}
              className="card overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-primary/30"
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
                    className="btn-primary flex flex-1 items-center justify-center gap-2"
                  >
                    <Eye size={18} />
                    View
                  </Link>

                  <button
                    onClick={() => dispatch(deleteFromLibraryThunk(anime.id))}
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

export default LibraryPage;
