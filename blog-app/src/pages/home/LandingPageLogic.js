import { useEffect, useState } from 'react';
import useFetch from '../../utils/useFetch';
import { useStyles } from './LandingPageStyles';

const LadingPageLogic = () => {
  const classes = useStyles();
  const { data, loading, error, refetch, post, success } = useFetch(
    'http://178.62.198.162/api/posts?page=1'
  );
  const { data: categoriesData } = useFetch(
    'http://178.62.198.162/api/categories'
  );
  const [category, setCategory] = useState('');
  const handleChange = (event) => {
    setCategory(event.target.value);
    handleUserData(event);
  };

  // form data
  const [userData, setUserData] = useState({
    title: '',
    content: '',
    category_id: category,
  });
  const handleUserData = (evt) => {
    const value = evt.target.value;
    setUserData({
      ...userData,
      [evt.target.name]: value,
    });
  };

  const handlePost = async () => {
    if (!userData.title || !userData.content) {
      return;
    }
    post('http://178.62.198.162/api/posts', userData);
    setUserData({ title: '', content: '', category_id: category });
  };

  //snackbar
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (success) {
      setOpen(true);
    }
  }, [success]);

  // page number
  const [page, setPage] = useState(1);

  // refetch
  const handleRefetch = () => {
    setPage((prev) => {
      return prev + 1;
    });
    refetch(`http://178.62.198.162/api/posts?page=${page + 1}`);
  };

  // needed for select dropdown selector
  const categories = categoriesData;

  const [landingPageData, setLandingPageData] = useState([]);
  useEffect(() => {
    const slicedData = data.slice(0, 4);
    setLandingPageData((prevData) => [...prevData, ...slicedData]);
  }, [data]);

  return {
    classes,
    handleChange,
    handlePost,
    handleRefetch,
    category,
    data,
    landingPageData,
    userData,
    categories,
    handleUserData,
    loading,
    error,
    open,
    setOpen,
  };
};

export default LadingPageLogic;
