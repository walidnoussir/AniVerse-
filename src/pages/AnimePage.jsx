import { useDispatch, useSelector } from "react-redux";
import Spinner from "../components/ui/Spinner";
import { useEffect } from "react";
import { getAnime } from "../features/animes/animeSlice";
import SearchFilter from "../components/ui/SearchFilter";
import AnimeCard from "../components/AnimeCard";

function AnimePage() {
  const { isLoading, error, allAnimes } = useSelector((state) => state.anime);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAnime());
  }, []);

  console.log(isLoading);
  console.log(allAnimes);
  console.log(error);

  if (isLoading) return <Spinner />;

  return (
    <div className="px-10 py-8 space-y-6">
      <div>
        <h2 className="text-text">Explore Anime</h2>
        <p>
          Discover your next obsession from our vast library of cinematic
          masterpieces, trending <br /> simulcasts, and timeless classics.
        </p>
      </div>

      <SearchFilter />

      <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-5">
        {allAnimes.map((anime) => (
          <AnimeCard key={anime.mal_id} anime={anime} />
        ))}
      </div>
    </div>
  );
}

export default AnimePage;
