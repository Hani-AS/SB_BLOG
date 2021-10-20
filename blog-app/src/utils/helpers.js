export const getBlogs = (data, Blog) => {
  const posts = data.map(
    ({ category, content, created_at, img_url, title, id }) => {
      return (
        <Blog key={id} {...{ category, content, created_at, img_url, title }} />
      );
    }
  );
  return posts;
};
