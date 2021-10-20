import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme, prop) => {
  return {
    blogContainer: {
      '&&': {
        width: '200px',
        height: '263px',
        boxShadow: '0 0 10px 0 rgba(0,0,0,0.1)',
        position: 'relative',
      },
    },
    blogImage: {
      '&&': {
        width: '100%',
        height: '72px',
        backgroundImage: ({ img_url }) => `url(${img_url})`,
        backgroundSize: 'cover',
      },
    },
    blogContent: {
      '&&': {
        padding: '20px',
        height: '151px',
        overflow: 'hidden',
      },
    },
    blogHeading: {
      '&&': {
        marginTop: 0,
        marginBottom: '8px',
        fontSize: '24px',
      },
    },
    blogText: {
      '&&': {
        margin: 0,
        overflow: 'hidden',
        fontSize: '12px',
      },
    },
    created_at: {
      '&&': {
        position: 'absolute',
        top: '55px',
        left: '16px',
        fontSize: '8px',
        color: '#fff',
        margin: 0,
      },
    },
    category: {
      '&&': {
        position: 'absolute',
        top: '55px',
        right: '16px',
        fontSize: '8px',
        color: '#fff',
        margin: 0,
      },
    },
  };
});
