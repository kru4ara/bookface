import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <img
        className={classes.logo}
        src="http://www.unwater.org/app/plugins/types/vendor/toolset/onthego-resources/onthegosystems-icons/vectors/bootstrap-original-logo.svg"
        alt="logo"
      />
      <span className={classes.logoText}>ookface</span>
    </header>
  );
};

export default Header;
