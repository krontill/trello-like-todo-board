import React from 'react';
import { styled, ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import IconLowPriority from '../IconLowPriority';
import IconPriorityHigh from '../IconPriorityHigh';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
});

export const StyledFieldPriority = styled(({ ...props }) => (
  <ThemeProvider theme={theme}>
    <FormControl {...props} />
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

const stylesForIcons = {
  marginLeft: '10px',
  verticalAlign: 'bottom',
};

export const StyledIconLowPriority = styled(({ ...props }) => (
  <IconLowPriority {...props} />
))(stylesForIcons);

export const StyledIconPriorityHigh = styled(({ ...props }) => (
  <IconPriorityHigh {...props} />
))(stylesForIcons);
