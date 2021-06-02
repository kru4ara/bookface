import classes from './Header.module.css'

const Header = () => {
  return (
    <header className={classes.header}>
      <img
        src="http://www.unwater.org/app/plugins/types/vendor/toolset/onthego-resources/onthegosystems-icons/vectors/bootstrap-original-logo.svg"
        alt="logo"
      />
    </header>
  );
};

export default Header;