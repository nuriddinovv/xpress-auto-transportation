import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/main-layout";
import BlogID from "./pages/blog/blog-id";
import NotFound from "./pages/not-found";
import Home from "./pages/home";
import About from "./pages/about";
import Blog from "./pages/blog/blog";
import Contacts from "./pages/contacts";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogID />} />
        <Route path="/contacts" element={<Contacts />} />
      </Route>

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
