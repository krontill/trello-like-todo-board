const styles = theme => ({
  textField: {
    display: 'flex',
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 4,
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing.unit * 1.5,
      marginBottom: theme.spacing.unit * 3,
    },
  },
  selectField: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 4,
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing.unit * 1.5,
      marginBottom: theme.spacing.unit * 3,
    },
  },
  paper: {
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
  },
  formControl: {
    display: 'flex',
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 4,
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing.unit * 1.5,
      marginBottom: theme.spacing.unit * 3,
    },
  },
  selectIcon: {
    marginLeft: '10px',
    verticalAlign: 'bottom',
  },
  btn: {
    marginRight: '16px',
  },
});

export default styles;
