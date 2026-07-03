import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

import { getAllCharacters } from "../features/animes/animeSlice";

import Error from "../components/ui/Error";
import CharactersList from "../components/CharactersList";

function CharactersPage() {
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");

  const { allCharacters, isLoading, error } = useSelector(
    (state) => state.anime,
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(
        getAllCharacters({
          search,
        }),
      );
    }, 500);

    return () => clearTimeout(timer);
  }, [dispatch, search]);

  if (error) return <Error error={error} />;

  return (
    <section className="section py-12 space-y-10">
      {/* Header */}

      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h1>Explore Characters</h1>

          <p className="mt-3">
            Discover heroes, villains and supporting characters from thousands
            of anime.
          </p>
        </div>

        {/* Search */}

        <div className="relative w-full lg:w-96">
          <Search
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted"
          />

          <input
            type="text"
            placeholder="Search characters..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input pl-12"
          />
        </div>
      </div>

      {/* Characters */}

      {allCharacters.length === 0 ? (
        <div className="card p-10 text-center">
          <h3>No characters found.</h3>

          <p className="mt-2">Try searching with another keyword.</p>
        </div>
      ) : (
        <CharactersList allCharacters={allCharacters} isLoading={isLoading} />
      )}
    </section>
  );
}

export default CharactersPage;
