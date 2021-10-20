import {
  Alert,
  Button,
  CircularProgress,
  MenuItem,
  Select,
  TextareaAutosize,
  TextField,
} from '@mui/material';

import Blog from '../../components/blog/Blog';
import PrimaryButton from './components/PrimaryButton';
import PhotoCameraOutlinedIcon from '@mui/icons-material/PhotoCameraOutlined';

import { getBlogs } from '../../utils/helpers';
import LadingPageLogic from './LadingPageLogic';
import { Box } from '@mui/system';
import { SnackBar } from './components/SnackBar';

const LandingPage = () => {
  const {
    classes,
    handleChange,
    handlePost,
    handleRefetch,
    category,
    landingPageData,
    userData,
    categories,
    handleUserData,
    loading,
    error,
    open,
    setOpen,
  } = LadingPageLogic();

  return (
    <div className={classes.mainContainer}>
      <div className={classes.postContainer}>
        <div className={classes.innerContainer}>
          <h1 className={classes.postContainerTitle}>
            Plaats een blog bericht
          </h1>
          <div className={classes.textFieldContainer}>
            <h3 className={classes.postContainerSubTitle}>Berichtnaam</h3>
            <TextField
              fullWidth
              label='Geen titel'
              id='fullWidth'
              className={classes.textField}
              size='small'
              name='title'
              value={userData.title}
              onChange={handleUserData}
            />
          </div>
          <div className={classes.textFieldContainer}>
            <h3 className={classes.postContainerSubTitle}>Categorie</h3>
            <Select
              id='select-standard'
              displayEmpty
              fullWidth
              size='small'
              className={classes.select}
              name='category_id'
              value={categories}
              onChange={handleChange}
            >
              <MenuItem disabled value=''>
                <em style={{ color: 'rgb(204 200 198)' }}>Geen categorie</em>
              </MenuItem>
              {category?.map((option) => (
                <MenuItem key={option.id} value={option.id}>
                  {option.name}
                </MenuItem>
              ))}
            </Select>
          </div>
          <div className={classes.textFieldContainer}>
            <h3 className={classes.postContainerSubTitle}>Header afbeelding</h3>
            <div className={classes.uploadContainer}>
              <PhotoCameraOutlinedIcon className={classes.uploadIcon} />
              <Button variant='contained' className={classes.uploadBtn}>
                kies bestand
              </Button>
            </div>
          </div>
          <div className={classes.textAreaContainer}>
            <h3 className={classes.postContainerSubTitle}>Bericht</h3>
            <TextareaAutosize
              className={classes.textArea}
              name='content'
              value={userData.content}
              onChange={handleUserData}
              aria-label='minimum height'
              style={{
                height: 200,
              }}
            />
          </div>
        </div>
        <PrimaryButton
          {...{ classes, text: 'bericht aanmaken' }}
          handleClick={handlePost}
        />
      </div>
      <div className={classes.cardContainer}>
        <div className={classes.innerContainer2}>
          <div className={classes.cardHolder}>
            {loading ? (
              <Box>
                <CircularProgress />
              </Box>
            ) : error ? (
              <Box>
                <Alert severity='error'>Er is iets mis gegaan!</Alert>
              </Box>
            ) : (
              getBlogs(landingPageData, Blog)
            )}
          </div>
          <div className={classes.loadMoreWrapper}>
            <PrimaryButton
              {...{ classes, text: 'meer laden' }}
              handleClick={handleRefetch}
            />
          </div>
        </div>
      </div>
      <SnackBar {...{ open, setOpen }} />
    </div>
  );
};

export default LandingPage;
