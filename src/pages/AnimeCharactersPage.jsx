import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getAnimeCharacters } from "../features/animes/animeSlice";

import Spinner from "../components/ui/Spinner";
import Error from "../components/ui/Error";
import CharacterCard from "../components/CharacterCard";

function AnimeCharactersPage() {
  const { id } = useParams();

  const dispatch = useDispatch();

  const { animeCharacters, isLoading, error } = useSelector(
    (state) => state.anime,
  );

  useEffect(() => {
    dispatch(getAnimeCharacters(id));
  }, [dispatch, id]);

  if (isLoading) return <Spinner />;

  if (error) return <Error error={error} />;

  return (
    <section className="container py-12 px-8">
      <div className="mb-10">
        <h1 className="text-4xl font-bold">Anime Characters</h1>

        <p className="mt-2 text-gray-400">
          Meet the characters from this anime.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
        {animeCharacters.map((character) => (
          <CharacterCard
            key={character.character.mal_id}
            character={character}
          />
        ))}
      </div>
    </section>
  );
}

export default AnimeCharactersPage;
