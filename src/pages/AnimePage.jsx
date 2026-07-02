import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import Spinner from "../components/ui/Spinner";
import SearchFilter from "../components/ui/SearchFilter";
import AnimeCard from "../components/AnimeCard";

import { getAnime } from "../features/animes/animeSlice";
import AnimeLists from "../components/AnimeLists";

function AnimePage() {
  const { isLoading, error, allAnimes } = useSelector((state) => state.anime);

  const dispatch = useDispatch();

  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("");
  const [type, setType] = useState("");

  useEffect(() => {
    dispatch(
      getAnime({
        search,
        genre,
        type,
      }),
    );
  }, [dispatch, search, genre, type]);

  if (error) return <p>{error}</p>;

  return (
    <div className="space-y-6 px-10 py-8">
      <div>
        <h2 className="text-text">Explore Anime</h2>

        <p>
          Discover your next obsession from our vast library of cinematic
          masterpieces, trending
          <br />
          simulcasts, and timeless classics.
        </p>
      </div>

      <SearchFilter
        search={search}
        setSearch={setSearch}
        genre={genre}
        setGenre={setGenre}
        type={type}
        setType={setType}
      />

      <AnimeLists isLoading={isLoading} allAnimes={allAnimes} />
    </div>
  );
}

export default AnimePage;
