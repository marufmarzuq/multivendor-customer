import "./header.css";
import MainHeader from "./component/MainHeader";
import HeaderMenu from "./component/HeaderMenu";
import TopBar from "./component/TopBar";

const Header = ({ categories , headerLogo , languageSwitcher, currencySwitcher , user , language , filterCategories }) => {

  return (
    <header className="header">
      {/* <!-- topbar --> */}
		<TopBar 
		languageSwitcher={languageSwitcher}
		currencySwitcher={currencySwitcher}
		user={user}
		language={language}
		/>
      {/* <!-- ./topbar --> */}

      {/* <!-- Main Header --> */}
	  <MainHeader headerLogo={headerLogo} filterCategories={filterCategories}/>
      {/* <!-- ./Main Header --> */}

      {/* <!-- header-menu --> */}
      <HeaderMenu categories={categories}/>
      {/* <!-- ./header-menu --> */}
    </header>
  );
};

export default Header;
