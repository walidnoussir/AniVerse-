import { Search, ChevronDown } from "lucide-react";

const SearchFilter = () => {
  return (
    <section className="w-full">
      <div className="flex flex-col lg:flex-row gap-4 rounded-xl border border-border bg-surface px-6 py-5">
        {/* Search */}
        <div className="relative flex-1">
          <Search
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted"
          />

          <input
            type="text"
            placeholder="Search for titles, studios, or genres..."
            className="input h-14 pl-12 bg-background"
          />
        </div>

        {/* Genre */}
        <div className="relative w-full lg:w-44">
          <select className="input h-14 appearance-none bg-background pr-10 cursor-pointer">
            <option>Genre: All</option>
            <option>Action</option>
            <option>Adventure</option>
            <option>Comedy</option>
            <option>Drama</option>
            <option>Fantasy</option>
          </select>

          <ChevronDown
            size={18}
            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-text-muted"
          />
        </div>

        {/* Type */}
        <div className="relative w-full lg:w-44">
          <select className="input h-14 appearance-none bg-background pr-10 cursor-pointer">
            <option>Type: All</option>
            <option>TV</option>
            <option>Movie</option>
            <option>OVA</option>
            <option>ONA</option>
          </select>

          <ChevronDown
            size={18}
            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-text-muted"
          />
        </div>

        {/* Sort */}
        <div className="relative w-full lg:w-48">
          <select className="input h-14 appearance-none bg-background pr-10 cursor-pointer">
            <option>Sort: Popularity</option>
            <option>Newest</option>
            <option>Rating</option>
            <option>A-Z</option>
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
