import { NavLink } from "react-router-dom";

function Header() {
  const navLinkClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  return (
    <header className="site-header">
      <div className="container header-container">
        <div className="logo">
          <NavLink to="/" className="logo-link">
            M-Track
          </NavLink>
        </div>

        <nav className="nav">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/domain" className={navLinkClass}>
            Domain
          </NavLink>
          <NavLink to="/milestones" className={navLinkClass}>
            Milestones
          </NavLink>
          <NavLink to="/documents" className={navLinkClass}>
            Documents
          </NavLink>
          <NavLink to="/slides" className={navLinkClass}>
            Slides of Past Presentations
          </NavLink>
          <NavLink to="/about-us" className={navLinkClass}>
            About Us
          </NavLink>
          <NavLink to="/contact-us" className={navLinkClass}>
            Contact Us
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;