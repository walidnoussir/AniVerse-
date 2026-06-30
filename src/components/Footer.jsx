import { NavLink } from "react-router-dom";

const footerLinks = [
  {
    title: "Privacy Policy",
    path: "/privacy-policy",
  },
  {
    title: "Terms of Service",
    path: "/terms",
  },
  {
    title: "Contact Us",
    path: "/contact",
  },
  {
    title: "Help Center",
    path: "/help",
  },
];

function Footer() {
  return (
    <footer className="border-t border-white/5 bg-background">
      <div className="section flex flex-col gap-8 py-10 lg:flex-row lg:items-center lg:justify-between">
        {/* <div>
          <h2 className="text-2xl font-extrabold text-primary">AniVerse</h2>
          <p className="mt-2 text-sm text-text-muted">
            The ultimate anime experience.
          </p>
        </div> */}
        {/* Links */}
        <ul className="flex flex-wrap items-center gap-x-8 gap-y-3">
          {footerLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className="text-sm text-text-muted transition-colors duration-300 hover:text-white"
              >
                {link.title}
              </NavLink>
            </li>
          ))}
        </ul>
        {/* Copyright */}
        <p className="text-sm text-text-muted">
          © {new Date().getFullYear()} AniVerse. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
