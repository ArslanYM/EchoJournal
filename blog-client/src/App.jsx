import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import Register from "./pages/RegisterPage";
import FeedPage from "./pages/FeedPage";
import BlogPage from "./pages/BlogPage";
import MyBlogs from "./pages/MyBLogs";
import { Header } from "./layout/Header";
import { CreateBlog } from "./pages/CreateBlog";
import { RecoilRoot } from "recoil";
// import { Footer } from "./layout/Footer";
function App() {
  return (
    <>
      <RecoilRoot>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/blogs" element={<FeedPage />} />
            <Route path="/myblogs" element={<MyBlogs />} />
            <Route path="/blog/:blogId" element={<BlogPage />} />
            <Route path="/create" element={<CreateBlog />} />
          </Routes>
        </Router>
      </RecoilRoot>
    </>
  );
}

export default App;
