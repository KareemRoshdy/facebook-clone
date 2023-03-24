import { Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/Auth/LoginPage";
import SignUpPage from "./Pages/Auth/SignUpPage";
import HomePage from "./Pages/Home/HomePage";
import NewsPage from "./Pages/News/NewsPage";
import ProfilePage from "./Pages/Profile/ProfilePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<SignUpPage />} />
        <Route exact path="/home" element={<HomePage />} />
        <Route exact path="/profile" element={<ProfilePage />} />
        <Route exact path="/news" element={<NewsPage />} />
      </Routes>
    </div>
  );
}

export default App;
