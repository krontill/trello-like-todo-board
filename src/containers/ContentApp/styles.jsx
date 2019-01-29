import React from 'react';
import { styled, ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
});

const StyledContent = styled(({ ...props }) => (
  <ThemeProvider theme={theme}>
    <div {...props} />
  </ThemeProvider>
))({
  flex: '1 0 100%',
  padding: '4px',
  display: 'flex',
  alignItems: 'flex-start',
  overflowX: 'auto',
  [theme.breakpoints.down('xs')]: {
    flexDirection: 'column',
  },
});

export default StyledContent;
