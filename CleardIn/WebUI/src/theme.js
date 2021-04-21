import { grey } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';
// import 'typeface-roboto';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1665d8',
      light: '#b0f1f0',
    },
    secondary: {
      main: '#9ea0a5',
      dark: grey,
    },
    error: {
      main: '#ffada5',

    },
    success: {
      main: '#daefa9',
    },
    info: {
      main: grey[900],
      light: '#fdd570',
      dark: grey[600],
    },
    text: {
      primary: '#1c1c21', // '#3e3f42',
      secondary: '#5c5c5c', // #6b6c6f',
    },
    grey: {
      100: '#f8fafb',
      200: '#f2f4f6',
      300: '#e8ecef',
      400: '#98a9bc',
      500: '#778ca2',
    },
    clearedIn: {
      grey: {
        100: '#f6f6f6',
        200: '#eeeeee',
        300: '#cccccc',
        400: '#949494',
        500: '#666666',
      },
      selectedElementBGColor: '#eaf0ff', // rgba(77, 124, 254, 0.12),
      dark: '#5c5c5c',
      bodyBackground: '#fafafa',
      blue: '#1d4cd7',
    },
    relationShip: {
      vendor: '#daefa9',
      customer: '#fdd570',
      partner: '#b0f1f0',
    },
  },
  typography: {
    fontFamily: ['Roboto', 'Rubik', 'sans-serif'].join(','),
    h1: {
      fontSize: '1.875rem',
      fontWeight: 'normal',
      fontStyle: 'normal',
      lineHeight: 'normal',
      letterSpacing: 'normal',
    },
    h2: {
      fontSize: '1.625rem',
      fontWeight: 'normal',
      fontStyle: 'normal',
      lineHeight: 'normal',
      letterSpacing: 'normal',
    },
    h3: {
      fontSize: '1.25rem',
      fontWeight: 300,
      fontStyle: 'normal',
      lineHeight: 'normal',
      letterSpacing: 'normal',
    },
    h4: {
      fontSize: '1.125rem',
      fontWeight: 'normal',
      fontStyle: 'normal',
      lineHeight: 'normal',
      letterSpacing: 'normal',
    },
    h5: {
      fontSize: '1rem',
      fontWeight: 'normal',
      fontStyle: 'normal',
      lineHeight: 1.5,
      letterSpacing: 'normal',
    },
    h6: {
      fontSize: '1.25rem',
      fontWeight: 500,
      fontStyle: 'normal',
      lineHeight: 1.05,
      letterSpacing: 'normal',
    },
    subtitle1: {
      fontSize: '0.938rem',
      fontWeight: 'normal',
      fontStyle: 'normal',
      lineHeight: 'normal',
      letterSpacing: 'normal',
    },
    subtitle2: {
      fontSize: '0.938rem',
      fontWeight: 'normal',
      fontStyle: 'normal',
      lineHeight: 'normal',
      letterSpacing: 'normal',
    },
    caption: {
      fontSize: '0.875rem',
      fontWeight: 500,
      fontStyle: 'normal',
      lineHeight: 'normal',
      letterSpacing: 'normal',
    },
    link: {
      fontSize: '0.875rem',
      fontWeight: 'normal',
      fontStyle: 'normal',
      lineHeight: 1.5,
      letterSpacing: 'normal',
    },
    body1: {
      fontSize: '0.875rem',
      fontWeight: 'normal',
      fontStyle: 'normal',
      lineHeight: 1.14,
      letterSpacing: 'normal',
    },
    body2: {
      fontFamily: 'Rubik',
      fontSize: '0.875rem',
      fontWeight: 300,
      fontStyle: 'normal',
      lineHeight: 1.5,
      letterSpacing: 'normal',
    },
    button: {
      fontSize: '0.75rem',
      fontWeight: 500,
      fontStyle: 'normal',
      lineHeight: 'normal',
      letterSpacing: 'normal',
      textTransform: 'none',
    },
  },
  overrides: {
    MuiButton: {
      root: {
        maxWidth: '200px',
        display: 'block',
      },
      label: {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      },
    },
  },
});

export default theme;
