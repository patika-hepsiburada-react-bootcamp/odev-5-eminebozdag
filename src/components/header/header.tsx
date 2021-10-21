import "./header.css";
import Logo from "./logo/logo";
import Profile from "./profile/profile";
const Header = () => {
  return (
    <div className="header">
      <Profile />
      <Logo />
    </div>
  );
};
export default Header;
