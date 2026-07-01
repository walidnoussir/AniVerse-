import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTopAnime } from "../features/animes/animeSlice";
import AnimeCard from "./AnimeCard";
import Spinner from "./ui/Spinner";

function TrendingAnimes() {
  const { isLoading, error, topAnime } = useSelector((state) => state.anime);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopAnime());
  }, []);

  console.log(isLoading);
  console.log(topAnime);
  console.log(error);
  if (isLoading) return <Spinner />;

  const trendingAnime = topAnime?.slice(0, 6);

  console.log(trendingAnime);

  return (
    <div id="trending" className="py-6 px-4 space-y-8">
      <h2 className="text-text">Trending Anime</h2>
      <p>What's capturing everyone's attention right now.</p>

      <div className="grid md:grid-cols-4 lg:grid-cols-6 gap-4 py-2 px-4">
        {trendingAnime?.map((anime) => (
          <AnimeCard key={anime.mal_id} anime={anime} />
        ))}
      </div>
    </div>
  );
}

export default TrendingAnimes;
