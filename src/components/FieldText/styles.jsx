import React from 'react';
import { styled, ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
});

const StyledTextField = styled(({ ...props }) => (
  <ThemeProvider theme={theme}>
    <TextField {...props} />
  </ThemeProvider>
))({
  display: 'flex',
  marginTop: theme.spacing.unit * 2,
  marginBottom: theme.spacing.unit * 4,
  [theme.breakpoints.down('xs')]: {
    marginTop: theme.spacing.unit * 1.5,
    marginBottom: theme.spacing.unit * 3,
  },
});

export default StyledTextField;
