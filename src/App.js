import Index from "./Screens/Index";
import Profile from "./Screens/Profile";
import Header from "./commons/Header";
import { useSelector } from "react-redux";
import "./App.css";

function App() {
  const index = useSelector((state) => state.index);
  console.log("State", index);

  return (
    <div className="App">
      <Header />
      {index.screen === "home" ? <Index /> : <Profile />}
    </div>
  );
}

export default App;
