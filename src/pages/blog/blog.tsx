import { BlogsCard } from "../../components/blogs-card";

export const Blog = () => {
  return (
    <div className=" container py-4">
      <p className="text-center text-mainDark font-bold text-2xl md:text-[32px] mb-5 md:mb-7">
        BLOG POSTS
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {[1, 2, 3, 4, 5, 6, 7].map((item) => (
          <BlogsCard key={item} />
        ))}
      </div>
    </div>
  );
};
