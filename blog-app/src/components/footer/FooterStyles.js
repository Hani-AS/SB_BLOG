import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme, prop) => {
  return {
    footer: {
      '&&': {
        height: '32px',
        width: '100%',
        backgroundColor: '#262626',
        display: 'flex',
        flexShrink: 0,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#FFFFFF',
        fontSize: '12px',
      },
    },
  };
});
