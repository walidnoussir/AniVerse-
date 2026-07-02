import { ChevronDown, Search } from "lucide-react";

const SearchFilter = ({
  search,
  setSearch,
  genre,
  setGenre,
  type,
  setType,
}) => {
  return (
    <section className="w-full">
      <div className="flex flex-col gap-4 rounded-xl border border-border bg-surface px-6 py-5 lg:flex-row">
        {/* Search */}
        <div className="relative flex-1">
          <Search
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted"
          />

          <input
            type="text"
            placeholder="Search for titles..."
            className="input h-14 bg-background pl-12"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Genre */}
        <div className="relative w-full lg:w-44">
          <select
            className="input h-14 cursor-pointer appearance-none bg-background pr-10"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          >
            <option value="">Genre: All</option>
            <option value="1">Action</option>
            <option value="2">Adventure</option>
            <option value="4">Comedy</option>
            <option value="8">Drama</option>
            <option value="10">Fantasy</option>
          </select>

          <ChevronDown
            size={18}
            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-text-muted"
          />
        </div>

        {/* Type */}
        <div className="relative w-full lg:w-44">
          <select
            className="input h-14 cursor-pointer appearance-none bg-background pr-10"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="">Type: All</option>
            <option value="tv">TV</option>
            <option value="movie">Movie</option>
            <option value="ova">OVA</option>
            <option value="ona">ONA</option>
            <option value="special">Special</option>
          </select>

          <ChevronDown
            size={18}
            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-text-muted"
          />
        </div>
      </div>
    </section>
  );
};

export default SearchFilter;
