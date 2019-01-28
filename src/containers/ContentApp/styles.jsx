const styles = theme => ({
  content: {
    flex: '1 0 100%',
    padding: '4px',
    display: 'flex',
    alignItems: 'flex-start',
    overflowX: 'auto',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
});

export default styles;
