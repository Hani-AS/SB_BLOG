export const getBlogs = (data, Blog) => {
  const posts = data.map((blog) => {
    return <Blog key={blog.id} blog={blog} />;
  });
  return posts;
};
