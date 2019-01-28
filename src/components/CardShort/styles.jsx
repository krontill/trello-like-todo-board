const styles = () => ({
  card: {
    position: 'relative',
    background: '#fff',
    margin: '8px 0',
    cursor: 'pointer',
    '&:hover $action': {
      opacity: 1,
    },
    '&:hover': {
      background: '#f5f6f7',
    },
  },
  cardActive: {
    background: '#f5f6f7',
    '& $action': {
      opacity: 1,
    },
  },
  selectedCard: {
    background: '#d3d4d5',
    '&:hover': {
      background: '#e4e5e6',
    },
  },
  title: {
    fontSize: '0.875rem',
    lineHeight: '1.42',
  },
  icon: {
    marginRight: '8px',
  },
  date: {
    top: '-5px',
    position: 'relative',
    marginRight: '8px',
  },
  action: {
    position: 'absolute',
    right: '8px',
    top: '8px',
    opacity: 0,
    transition: 'opacity .1s',
  },
});

export default styles;
