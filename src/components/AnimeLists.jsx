import AnimeCard from "./AnimeCard";
import Spinner from "./ui/Spinner";

function AnimeLists({ allAnimes, isLoading }) {
  if (isLoading) return <Spinner />;

  return (
    <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-5">
      {allAnimes?.map((anime, i) => (
        <AnimeCard key={i} anime={anime} />
      ))}
    </div>
  );
}

export default AnimeLists;
