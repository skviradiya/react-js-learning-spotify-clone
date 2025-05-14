import { BrowserRouter, Route, Routes } from "react-router";
import AppLayout from "./AppLayout";
import Home from "./pages/Home/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import SignUp from "./pages/SignUp";
import AuthProvider from "./context/AuthContext";
import { useAppDispatch } from "./store/store";
import { fetchSpotifyAccessToken } from "./store/thunk/spotifyThunk";
import { useEffect } from "react";
import ViewCategories from "./pages/ViewCategories";

function App() {
  const dispatch = useAppDispatch();
  const fetchToken = async () => {
    try {
      const res = await dispatch(fetchSpotifyAccessToken()).unwrap();
      console.log("🚀 ~ fetchToken ~ res:", res);
    } catch (error) {
      console.log("🚀 ~ fetchToken ~ error:", error);
    }
  };
  useEffect(() => {
    fetchToken();
  }, []);
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/categories/:catId" element={<ViewCategories />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
