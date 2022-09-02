import Index from "./Screens/Index/Index.js";
import Profile from "./Screens/Profile/Profile.js";
import Header from "./commons/Header";
import { useSelector } from "react-redux";
import "./App.css";

function App() {
  const index = useSelector((state) => state.index);
  console.log("State", index);

  return (
    <div className="app">
      <Header />
      {index.screen === "home" ? <Index /> : <Profile />}
    </div>
  );
}

export default App;
