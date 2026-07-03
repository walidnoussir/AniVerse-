import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Star, BookmarkPlus, MoveRight } from "lucide-react";

import Spinner from "../components/ui/Spinner";
import { getAnimeById } from "../features/animes/animeSlice";
import {
  addFavoriteThunk,
  // fetchFavorites,
} from "../features/favorites/favotiteSlice";
import toast from "react-hot-toast";
import { addToLibraryThunk } from "../features/library/librarySlice";

function AnimeDetailsPage() {
  const navigate = useNavigate();

  const { isLoading, error, selectedAnime } = useSelector(
    (state) => state.anime,
  );

  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getAnimeById(id));
    // dispatch(fetchFavorites());
  }, []);

  if (isLoading) return <Spinner />;

  if (error) {
    return (
      <div className="page flex-center min-h-screen">
        <h2 className="text-error">{error}</h2>
      </div>
    );
  }

  console.log(selectedAnime);

  if (!selectedAnime) return null;

  const anime = selectedAnime;

  const image =
    anime.images?.webp?.large_image_url || anime.images?.jpg?.large_image_url;

  const animeInfos = {
    id: anime.mal_id,
    title: anime.title,
    image: anime.images.jpg.large_image_url,
    score: anime.score,
    episodes: anime.episodes,
    status: anime.status,
  };

  const addToFavorite = async () => {
    try {
      await dispatch(addFavoriteThunk(animeInfos));
      toast.success(`${anime.title} added to favorites`);
    } catch {
      toast.error("Failed to add favorite");
    }
  };

  const addToLibrary = async () => {
    try {
      await dispatch(addToLibraryThunk(animeInfos));
      toast.success(`${anime.title} added to library`);
    } catch {
      toast.error("Failed to add to library");
    }
  };

  return (
    <div className="page pb-20">
      <div className="section pt-10">
        <div className="grid gap-10 lg:grid-cols-[320px_1fr]">
          <div className="space-y-5">
            <div className="overflow-hidden rounded-xl border border-white/10 bg-card">
              <img
                src={image}
                alt={anime.title}
                className="w-full object-cover"
              />
            </div>

            <button
              className="btn-primary w-full flex gap-2"
              onClick={addToLibrary}
            >
              <BookmarkPlus size={20} />
              Add To Library
            </button>

            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                className="btn-secondary flex items-center justify-center gap-2"
                onClick={addToFavorite}
              >
                {/* <Heart /> */}
                Favorite
              </button>

              <button className="btn-secondary flex items-center justify-center gap-2">
                <Star />
                Rate
              </button>

              <button
                className="btn-secondary col-span-2 flex justify-center items-center gap-2"
                onClick={() => navigate(`/anime/${anime.mal_id}/characters`)}
              >
                View All Characters
                <MoveRight />
              </button>
            </div>
          </div>

          <section className="space-y-8">
            <div>
              <div className="flex items-center gap-4">
                <h1>{anime.title}</h1>

                <div className="flex items-center gap-2 rounded-full bg-accent px-4 py-2 font-semibold text-black">
                  <Star />
                  {anime.score}
                </div>
              </div>

              {anime.title_japanese && (
                <p className="mt-2 text-text">{anime.title_japanese}</p>
              )}

              <div className="mt-6 flex flex-wrap gap-3">
                {anime.genres?.map((genre) => (
                  <span key={genre.mal_id} className="badge">
                    {genre.name}
                  </span>
                ))}

                {anime.themes?.map((theme) => (
                  <span key={theme.mal_id} className="badge">
                    {theme.name}
                  </span>
                ))}

                {anime.demographics?.map((demo) => (
                  <span key={demo.mal_id} className="badge">
                    {demo.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="card grid gap-6 p-6 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <p className="text-sm text-text-muted">Status</p>
                <h3 className="mt-2 text-lg">{anime.status}</h3>
              </div>

              <div>
                <p className="text-sm text-text-muted">Episodes</p>
                <h3 className="mt-2 text-lg">{anime.episodes}</h3>
              </div>

              <div>
                <p className="text-sm text-text-muted">Duration</p>
                <h3 className="mt-2 text-lg">{anime.duration}</h3>
              </div>

              <div>
                <p className="text-sm text-text-muted">Rating</p>
                <h3 className="mt-2 text-lg">{anime.rating}</h3>
              </div>

              <div>
                <p className="text-sm text-text-muted">Season</p>
                <h3 className="mt-2 text-lg capitalize">
                  {anime.season} {anime.year}
                </h3>
              </div>

              <div>
                <p className="text-sm text-text-muted">Studio</p>
                <h3 className="mt-2 text-lg">
                  {anime.studios?.map((studio) => studio.name).join(", ")}
                </h3>
              </div>

              <div>
                <p className="text-sm text-text-muted">Source</p>
                <h3 className="mt-2 text-lg">{anime.source}</h3>
              </div>

              <div>
                <p className="text-sm text-text-muted">Popularity</p>
                <h3 className="mt-2 text-lg">#{anime.popularity}</h3>
              </div>
            </div>

            <div>
              <h3 className="text-primary font-semibold">Synopsis</h3>
              <p>{anime.synopsis}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default AnimeDetailsPage;
