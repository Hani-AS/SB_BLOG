import { makeStyles } from '@mui/styles';
import SBlogo from '../../assets/svgs/SBlogo.svg';
import background from './../../assets/images/background.webp';

export const useStyles = makeStyles((theme, prop) => {
  return {
    headerContainer: {
      '&&': {
        height: '250px',
        width: '100%',
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        flexShrink: 0,
      },
    },
    headerContainerMask: {
      '&&': {
        height: '250px',
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.4)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
    },
    innerContainerWrapper: {
      '&&': {
        width: '100%',
        maxWidth: '1024px',
        padding: '0 43px',
      },
    },
    innerContainer: {
      '&&': {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        width: '100%',
        height: '71px',
        marginTop: '24px',
        alignItems: 'center',
        [theme.breakpoints.down('s')]: {
          justifyContent: 'center',
        },
      },
    },
    logo: {
      '&&': {
        width: '301px',
        height: '71px',
        backgroundImage: `url(${SBlogo})`,
        backgroundSize: 'cover',
        marginRight: '10px',
        [theme.breakpoints.down('xss')]: {
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        },
      },
    },
    blogTitle: {
      '&&': {
        display: ({ blogTitle }) => !blogTitle && 'none',
        fontSize: '48px',
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
        [theme.breakpoints.down('s')]: {
          marginTop: '30px',
        },
      },
    },
    buttonsContainer: {
      '&&': {
        display: 'flex',
        alignItems: 'center',
        marginTop: '12px',
        width: '120px',
        justifyContent: 'space-around',
      },
    },
    btn: {
      '&&': {
        color: '#fff',
        borderRadius: 0,
        padding: 0,
        minWidth: 'auto',
        lineHeight: '1',
        textTransform: 'capitalize',
        fontSize: '18px',
        transition: 'transform .3s',
        '&:hover': {
          transform: 'translateX(4px)',
        },
      },
    },
  };
});
