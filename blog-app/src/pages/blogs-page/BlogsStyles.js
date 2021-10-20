import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme, prop) => {
  return {
    blogsContainer: {
      '&&': {
        width: '100%',
        display: 'flex',
        padding: '49.5px',
      },
    },
    blogsSpacer: {
      '&&': {
        width: '100%',
        padding: '24px',
        backgroundColor: '#fff',
      },
    },
    blogsInnerContainer: {
      '&&': {
        width: '100%',
        height: '551px',
        overflowY: 'auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, max-content))',
        justifyContent: 'center',
        padding: 'initial',
        rowGap: '24px',
        columnGap: '24px',
      },
    },
    paginationContainer: {
      '&&': {
        height: '36px',
        marginTop: '26.5px',
        display: 'flex',
        justifyContent: 'center',
      },
    },
    loadingWrapper: {
      '&&': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
    },
  };
});
