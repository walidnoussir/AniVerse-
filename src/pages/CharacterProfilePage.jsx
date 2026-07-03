import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Heart, Mic, Tv } from "lucide-react";

import Spinner from "../components/ui/Spinner";
import Error from "../components/ui/Error";
import { getCharacterProfile } from "../features/animes/animeSlice";

function CharacterProfilePage() {
  const { id } = useParams();

  const dispatch = useDispatch();

  const { characterProfile, isLoading, error } = useSelector(
    (state) => state.anime,
  );

  useEffect(() => {
    dispatch(getCharacterProfile(id));
  }, []);

  if (isLoading) return <Spinner />;

  if (error) return <Error error={error} />;

  if (!characterProfile) return null;

  return (
    <section className="section py-12">
      <div className="grid gap-10 lg:grid-cols-[300px_1fr]">
        <aside className="space-y-5">
          <div className="card overflow-hidden">
            <img
              src={characterProfile.images.webp.image_url}
              alt={characterProfile.name}
              className="w-full object-cover"
            />
          </div>

          <div className="card p-5 space-y-4">
            <div className="flex-between">
              <span className="text-text-muted">Favorites</span>

              <span className="text-accent font-semibold">
                {characterProfile.favorites.toLocaleString()}
              </span>
            </div>

            <button className="btn-primary w-full flex gap-2">
              <Heart size={18} />
              Add To Favorites
            </button>
          </div>
        </aside>

        <div className="space-y-10">
          <div>
            <h1>{characterProfile.name}</h1>

            <div className="mt-4 flex items-center gap-4">
              <span className="badge">Character</span>

              <div className="flex items-center gap-2 text-accent">
                <Heart size={18} />

                {characterProfile.favorites.toLocaleString()}
              </div>
            </div>
          </div>

          <div>
            <h2 className="mb-5">Biography</h2>

            <div className="card p-6">
              <p className="whitespace-pre-line leading-8">
                {characterProfile.about || "No biography available."}
              </p>
            </div>
          </div>

          {characterProfile.voices.length > 0 && (
            <div>
              <h2 className="mb-5 flex items-center gap-2">
                <Mic size={22} />
                Voice Actors
              </h2>

              <div className="grid gap-4 md:grid-cols-2">
                {characterProfile.voices.map((voice) => (
                  <div
                    key={voice.person.mal_id}
                    className="card flex items-center gap-4 p-4"
                  >
                    <img
                      src={voice.person.images.jpg.image_url}
                      alt={voice.person.name}
                      className="h-16 w-16 rounded-lg object-cover"
                    />

                    <div>
                      <h3 className="text-lg">{voice.person.name}</h3>

                      <p className="text-sm">{voice.language}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {characterProfile.anime.length > 0 && (
            <div>
              <h2 className="mb-5 flex items-center gap-2">
                <Tv size={22} />
                Anime Appearances
              </h2>

              <div className="anime-grid">
                {characterProfile.anime.map((anime) => (
                  <Link
                    key={anime.anime.mal_id}
                    to={`/anime/${anime.anime.mal_id}`}
                    className="group"
                  >
                    <div className="card overflow-hidden">
                      <img
                        src={anime.anime.images.webp.image_url}
                        alt={anime.anime.title}
                        className="h-72 w-full object-cover transition group-hover:scale-105"
                      />

                      <div className="space-y-2 p-4">
                        <h3 className="line-clamp-2">{anime.anime.title}</h3>

                        <span className="badge">{anime.role}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default CharacterProfilePage;
