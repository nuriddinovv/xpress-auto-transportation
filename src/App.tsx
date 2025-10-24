import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/main-layout";
import BlogID from "./pages/blog/blog-id";
import NotFound from "./pages/not-found";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/blog/Blog";
import Contacts from "./pages/Contacts";

function App() {
  return (
    <>
      <Routes>
        {/* Layout bilan nested routes */}
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
    </>
  );
}

export default App;
