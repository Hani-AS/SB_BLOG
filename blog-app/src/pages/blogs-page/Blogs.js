import { Alert, CircularProgress, Pagination, Stack } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Blog from '../../components/blog/Blog';
import { getBlogs } from '../../utils/helpers';
import useFetch from '../../utils/useFetch';
import { useStyles } from './BlogsStyles';

const Blogs = () => {
  const classes = useStyles();
  const { data, loading, error, refetch } = useFetch(
    'http://178.62.198.162/api/posts?page=1'
  );
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  useEffect(() => {
    refetch(`http://178.62.198.162/api/posts?page=${page}`);
  }, [page]);

  return (
    <div className={classes.blogsContainer}>
      <div className={classes.blogsSpacer}>
        <div className={classes.blogsInnerContainer}>
          {loading ? (
            <Box className={classes.loadingWrapper}>
              <CircularProgress />
            </Box>
          ) : error ? (
            <Box className={classes.loadingWrapper}>
              <Alert severity='error'>Er is iets mis gegaan!</Alert>
            </Box>
          ) : (
            getBlogs(data, Blog)
          )}
        </div>
        <div className={classes.paginationContainer}>
          <Stack spacing={2}>
            <Pagination count={19} page={page} onChange={handleChange} />
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
