import { Route, Routes } from "react-router-dom";
<<<<<<< HEAD
import { MainLayout } from "./layout/main-layout";
import { BlogID } from "./pages/blog/blog-id";
import { NotFound } from "./pages/not-found";
import Home from "./pages/home";
import { About } from "./pages/about";
import { Blog } from "./pages/blog/blog";
import { Contacts } from "./pages/contacts";
=======
import MainLayout from "./layout/main-layout";
import BlogID from "./pages/blog/blog-id";
import NotFound from "./pages/not-found";
import About from "./pages/About";
import Blog from "./pages/blog/Blog";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
>>>>>>> 4ce9332b054da62c71dce8cea08fa38658cd792c

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
