import { Route, Routes } from "react-router-dom";
import Header from "./pages/Header/Header";
import Home from "./pages/Home/Home";
import Subscription from "./pages/Subscription/Subscription";
import Explore from "./pages/Explore/Explore";
import Library from "./pages/Library/Library";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Terms from "./pages/Terms/Terms";

function App() {
  return (
    <div>
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/subs" element={<Subscription></Subscription>}></Route>
        <Route path="/explore" element={<Explore></Explore>}></Route>
        <Route path="/library" element={<Library></Library>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/terms" element={<Terms></Terms>}></Route>
      </Routes>
    </div>
  );
}

export default App;
