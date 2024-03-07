import { useState } from "react";
function NavBar() {
  const [isToggle, setIsToggle] = useState(false);
  function handleToggle() {
    if (isToggle) {
      setIsToggle(false);
    } else {
      setIsToggle(true);
    }
  }

  return (
    <nav className="nav">
      <button
        className={isToggle ? "nav-menu nav-menu--active" : "nav-menu"}
        onClick={handleToggle}
      >
        <div className="nav-menu-item"></div>
        <div
          className={
            isToggle ? "nav-menu-item nav-menu-item--unactive" : "nav-menu-item"
          }
        ></div>
        <div className="nav-menu-item"></div>
      </button>
      <div
        className={isToggle ? "nav-section nav-section--active" : "nav-section"}
      >
        <div className="nav-text">
          <a href="/#home" onClick={handleToggle} className="nav-text-item">
            01-HOME
          </a>
          <a href="/#about" onClick={handleToggle} className="nav-text-item">
            02-ABOUT ME
          </a>
          <a href="/#project" onClick={handleToggle} className="nav-text-item">
            03-PROJECT
          </a>
          <a href="/#contact" onClick={handleToggle} className="nav-text-item">
            04-CONTACT
          </a>
        </div>
        <div className="nav-section-footer">MADE BY ME-POWERED BY ME</div>
      </div>
    </nav>
  );
}

export default NavBar;
