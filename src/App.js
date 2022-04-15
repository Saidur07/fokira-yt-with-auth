import { Route, Routes } from "react-router-dom";
import Header from "./pages/Header/Header";
import Home from "./pages/Home/Home";
import Subscription from "./pages/Subscription/Subscription";
import Explore from "./pages/Explore/Explore";
import Library from "./pages/Library/Library";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Terms from "./pages/Terms/Terms";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RequireAuth from "./pages/Shared/RequireAuth/RequireAuth";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./firebase.init";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  const user = useAuthState(auth);
  return (
    <div>
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/subs"
          element={
            user[0] ? <Subscription></Subscription> : <Explore></Explore>
          }
        ></Route>
        <Route path="/explore" element={<Explore></Explore>}></Route>
        <Route
          path="/library"
          element={
            <RequireAuth>
              <Library></Library>
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/terms" element={<Terms></Terms>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
