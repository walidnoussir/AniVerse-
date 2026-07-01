function AnimeCard({ anime }) {
  return (
    <article className="group overflow-hidden rounded-xl bg-surface border border-white/5 transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary-container/20">
      <div className="relative overflow-hidden">
        <img
          src={anime.images.webp.large_image_url}
          alt={anime.title}
          className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

        <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-accent px-2 py-1 text-xs font-semibold text-background shadow-lg">
          ⭐ {anime.score}
        </div>

        <div className="absolute bottom-3 left-3 rounded-full bg-black/60 px-2 py-1 text-xs text-white backdrop-blur">
          {anime.episodes} Episodes
        </div>
      </div>

      <div className="space-y-3 p-4">
        <h3 className="line-clamp-1 text-lg font-bold text-text transition-colors group-hover:text-primary">
          {anime.title_english || anime.title}
        </h3>

        <div className="flex flex-wrap gap-2">
          {anime.genres.slice(0, 2).map((genre) => (
            <span
              key={genre.mal_id}
              className="rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary"
            >
              {genre.name}
            </span>
          ))}
        </div>

        <p className="line-clamp-3 text-sm text-text-muted">{anime.synopsis}</p>

        <div className="flex items-center justify-between border-t border-white/5 pt-3">
          <span className="text-sm text-text-muted">{anime.year}</span>

          <span className="rounded-md bg-secondary-container/20 px-2 py-1 text-xs font-semibold text-secondary">
            #{anime.rank}
          </span>
        </div>
      </div>
    </article>
  );
}

export default AnimeCard;
