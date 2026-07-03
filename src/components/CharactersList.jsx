import CharacterCard from "./CharacterCard";
import Spinner from "./ui/Spinner";

function CharactersList({ allCharacters, isLoading }) {
  if (isLoading) return <Spinner />;

  return (
    <div className="anime-grid">
      {allCharacters.map((character) => (
        <CharacterCard
          key={character.mal_id}
          character={{
            character,
            role: character.about ? "Character" : "",
            favorites: character.favorites,
            voice_actors: [],
          }}
        />
      ))}
    </div>
  );
}

export default CharactersList;
