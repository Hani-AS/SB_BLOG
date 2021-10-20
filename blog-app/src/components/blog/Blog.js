import React from 'react';
import { useStyles } from './BlogStyles';

const Blog = ({ img_url, category, content, title, created_at }) => {
  const classes = useStyles({ img_url });
  return (
    <div className={classes.blogContainer}>
      <div className={classes.blogImage}></div>
      <div className={classes.blogContent}>
        <h1 className={classes.blogHeading}>{title}</h1>
        <p className={classes.blogText}>{content}</p>
        <p className={classes.category}>{category?.name}</p>
        <p className={classes.created_at}>{created_at.slice(0, 10)}</p>
      </div>
    </div>
  );
};

export default Blog;
