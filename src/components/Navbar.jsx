import { NavLink } from "react-router-dom";
import { Menu, Search, X } from "lucide-react";
import { useState } from "react";

const links = [
  { name: "Home", path: "/" },
  { name: "Anime", path: "/anime" },
  { name: "Characters", path: "/characters" },
  { name: "Favorites", path: "/favorites" },
  { name: "Library", path: "/my-library" },
  { name: "Dashboard", path: "/dashboard" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-background/80 backdrop-blur-xl">
      <nav className="section flex h-18 items-center justify-between">
        <NavLink
          to="/"
          className="text-3xl font-extrabold tracking-tight text-primary"
        >
          AniVerse
        </NavLink>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                end={link.path === "/"}
                className={({ isActive }) =>
                  `relative pb-1 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-primary"
                      : "text-text-muted hover:text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 rounded-full bg-primary transition-all duration-300 ${
                        isActive ? "w-full" : "w-0"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-5 lg:flex">
          <button className="text-text-muted transition hover:text-white">
            <Search size={18} />
          </button>

          <img
            src="https://i.pravatar.cc/150"
            alt="User"
            className="h-9 w-9 rounded-full border border-primary/30"
          />
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 text-text lg:hidden"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden border-t border-white/5 bg-surface transition-all duration-300 lg:hidden ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="section flex flex-col py-4">
          {links.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                end={link.path === "/"}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block rounded-lg px-4 py-3 text-sm font-medium transition ${
                    isActive
                      ? "bg-primary/15 text-primary"
                      : "text-text-muted hover:bg-white/5 hover:text-white"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}

          <div className="mt-5 flex items-center justify-between border-t border-white/5 pt-5">
            <button className="rounded-lg p-2 text-text-muted hover:text-white">
              <Search size={20} />
            </button>

            <img
              src="https://i.pravatar.cc/150"
              alt="User"
              className="h-10 w-10 rounded-full border border-primary/30"
            />
          </div>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
