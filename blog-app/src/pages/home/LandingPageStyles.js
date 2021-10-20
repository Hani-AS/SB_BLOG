import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme, prop) => {
  return {
    mainContainer: {
      '&&': {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        flexGrow: 1,
        justifyContent: 'space-between',
        [theme.breakpoints.down('mdlg')]: {
          justifyContent: 'center',
        },
        padding: '49.5px',
      },
    },
    postContainer: {
      '&&': {
        width: '430px',
        [theme.breakpoints.down('mdlg')]: {
          width: '473px',
        },
        height: '659px',
        backgroundColor: '#FFFFFF',
        padding: '24px 25px',
      },
    },
    cardContainer: {
      '&&': {
        width: '473px',
        height: '659px',
        backgroundColor: '#FFFFFF',
        padding: '24px 25px',
      },
    },
    innerContainer: {
      '&&': {
        width: '100%',
        height: '551px',
      },
    },
    innerContainer2: {
      '&&': {
        width: '100%',
        maxHeight: '100%',
        overflowY: 'auto',
      },
    },
    cardHolder: {
      '&&': {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        columnGap: '15px',
        rowGap: '15px',
        justifyContent: 'center',
      },
    },
    buttonContainer: {
      '&&': {
        width: '100%',
        height: '55px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
      },
    },
    mainBtn: {
      '&&': {
        textTransform: 'capitalize',
        fontSize: '12px',
        borderRadius: '18px',
        backgroundColor: '#F27623',
        width: '192px',
        '&:hover': {
          backgroundColor: 'rgb(242 118 35 / 90%)',
        },
      },
    },
    postContainerTitle: {
      '&&': {
        fontSize: '24px',
        color: '#2B2B2B',
        marginTop: 0,
      },
    },
    textFieldContainer: {
      marginBottom: '24px',
    },
    postContainerSubTitle: {
      '&&': {
        fontSize: '12px',
        color: '#404040a6',
        margin: 0,
      },
    },
    textField: {
      '&&': {
        marginTop: '8px',
        backgroundColor: '#FAFAFA',
        '& .MuiFormLabel-root': {
          color: '#C5C5C5',
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'transparent',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#000',
          },
        },
      },
    },
    select: {
      '&&': {
        marginTop: '8px',
        '&.MuiOutlinedInput-root': {
          '& fieldset': {
            border: 0,
          },
          '&.MuiInputBase-root': {
            backgroundColor: '#FAFAFA',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#000',
          },
        },
      },
    },
    uploadContainer: {
      '&&': {
        width: '141px',
        height: '48px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
    },
    uploadBtn: {
      '&&': {
        height: '24px',
        fontSize: '10px',
        borderRadius: '18px',
        padding: '5px 10px',
        backgroundColor: '#7d7d7d',
        textTransform: 'capitalize',
        '&:hover': {
          backgroundColor: '#F27623',
        },
      },
    },
    uploadIcon: {
      '&&': {
        fontSize: '18px',
        color: '#7d7d7d',
        marginRight: '16px',
      },
    },
    textArea: {
      '&&': {
        width: '100%',
        height: 200,
        marginTop: 8,
        border: 'transparent',
        backgroundColor: '#FAFAFA',
      },
    },
    loadMoreWrapper: {
      '&&': {
        margin: '5px',
      },
    },
  };
});
