import { useEffect } from "react";
import { getSeasonalAnime } from "../features/animes/animeSlice";
import AnimeCard from "./AnimeCard";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "./ui/Spinner";

function SeasonalAnime() {
  const { isLoading, error, seasonalAnime } = useSelector(
    (state) => state.anime,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSeasonalAnime());
  }, []);

  console.log(isLoading);
  console.log(seasonalAnime);
  console.log(error);
  if (isLoading) return <Spinner />;

  console.log(seasonalAnime);

  return (
    <div className="py-6 px-4 space-y-8 bg-surface-high">
      <h2 className="text-text">Trending Anime</h2>
      <p>What's capturing everyone's attention right now.</p>

      <div className="grid md:grid-cols-4 lg:grid-cols-6 gap-4 py-2 px-4">
        {seasonalAnime?.slice(0, 6)?.map((anime) => (
          <AnimeCard key={anime.mal_id} anime={anime} />
        ))}
      </div>
    </div>
  );
}

export default SeasonalAnime;
