import { useDispatch } from "react-redux";
import { setScreen } from "../Screens/Index/indexSlice";
import { AiOutlineHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <div className="header-wrapper">
      <div className="header-body">
        <button
          onClick={() => dispatch(setScreen("home"))}
          className="header-button">
          <p className="button-name">Home</p>
          <div className="icon">
            <AiOutlineHome />
          </div>
        </button>
        <button
          onClick={() => dispatch(setScreen("profile"))}
          className="header-button">
          <p className="button-name">Profile</p>
          <div className="icon">
            <CgProfile />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Header;
