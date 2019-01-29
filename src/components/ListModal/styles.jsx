import React from 'react';
import { styled, ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import FieldTitle from '../FieldTitle';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
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
});

export const StyledFieldTitle = styled(({ ...props }) => (
  <ThemeProvider theme={theme}>
    <FieldTitle {...props} />
  </ThemeProvider>
))({
  display: 'block',
  marginTop: theme.spacing.unit * 2,
  marginBottom: theme.spacing.unit * 4,
});
