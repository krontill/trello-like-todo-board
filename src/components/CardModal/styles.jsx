import React from 'react';
import { styled, ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import Select from 'react-select';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
});

export const StyledSelect = styled(({ ...props }) => (
  <ThemeProvider theme={theme}>
    <Select classNames="basic-multi-select" {...props} />
  </ThemeProvider>
))({
  marginTop: theme.spacing.unit * 2,
  marginBottom: theme.spacing.unit * 4,
  [theme.breakpoints.down('xs')]: {
    marginTop: theme.spacing.unit * 1.5,
    marginBottom: theme.spacing.unit * 3,
  },
});

export const StyledPaper = styled(({ ...props }) => (
  <ThemeProvider theme={theme}>
    <div {...props} />
  </ThemeProvider>
))({
  top: '30%',
  left: '50%',
  transform: 'translate(-50%, -30%)',
  position: 'absolute',
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[5],
  padding: theme.spacing.unit * 4,
  outline: 'none',
  minWidth: '310px',
  [theme.breakpoints.down('xs')]: {
    padding: theme.spacing.unit * 3,
  },
});
