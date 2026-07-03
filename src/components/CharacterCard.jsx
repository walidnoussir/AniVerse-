import { Heart, User } from "lucide-react";
import { Link } from "react-router-dom";

function CharacterCard({ character }) {
  const va = character.voice_actors.find(
    (actor) => actor.language === "Japanese",
  );

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-card transition hover:-translate-y-1 hover:border-primary/40">
      <img
        src={character.character.images.webp.image_url}
        alt={character.character.name}
        className="h-80 w-full object-cover"
      />

      <div className="space-y-3 p-5">
        <div>
          <h3 className="line-clamp-1 text-xl font-semibold">
            {character.character.name}
          </h3>

          <span className="text-primary text-sm">{character.role}</span>
        </div>

        <div className="flex items-center justify-between text-sm text-gray-400">
          <div className="flex items-center gap-1">
            <Heart size={16} className="fill-red-500 text-red-500" />
            {character.favorites.toLocaleString()}
          </div>

          {va && (
            <div className="flex items-center gap-1">
              <User size={15} />
              <span className="line-clamp-1">{va.person.name}</span>
            </div>
          )}
        </div>

        <Link
          to={`/characters/${character.character.mal_id}`}
          className="btn-secondary mt-2 flex justify-center"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
}

export default CharacterCard;
