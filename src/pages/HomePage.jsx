import Hero from "../components/Hero";
import SeasonalAnime from "../components/SeasonalAnime";
import TrendingAnimes from "../components/TrendingAnimes";

function HomePage() {
  return (
    <div>
      <Hero />
      <TrendingAnimes />
      <SeasonalAnime />
    </div>
  );
}

export default HomePage;
