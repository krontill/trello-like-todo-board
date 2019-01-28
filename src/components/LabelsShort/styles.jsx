import {
  BLUE,
  BLUE_HOVER,
  GREEN,
  GREEN_HOVER,
  ORANGE,
  ORANGE_HOVER,
  PURPLE,
  PURPLE_HOVER,
  RED,
  RED_HOVER,
  YELLOW,
  YELLOW_HOVER,
} from '../../constants/colors';

const styles = () => ({
  labels: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '16px 16px 0 16px',
  },
  label: {
    height: '8px',
    margin: '0 4px 4px 0',
    width: '40px',
    padding: '0',
    borderRadius: '4px',
    flexShrink: 0,
    transition: 'background .1s',
  },
  'label--yellow': {
    background: YELLOW,
    '&:hover, &$labelHover': {
      background: YELLOW_HOVER,
    },
  },
  'label--green': {
    background: GREEN,
    '&:hover, &$labelHover': {
      background: GREEN_HOVER,
    },
  },
  'label--orange': {
    background: ORANGE,
    '&:hover, &$labelHover': {
      background: ORANGE_HOVER,
    },
  },
  'label--red': {
    background: RED,
    '&:hover, &$labelHover': {
      background: RED_HOVER,
    },
  },
  'label--purple': {
    background: PURPLE,
    '&:hover, &$labelHover': {
      background: PURPLE_HOVER,
    },
  },
  'label--blue': {
    background: BLUE,
    '&:hover, &$labelHover': {
      background: BLUE_HOVER,
    },
  },
  labelHover: {},
  labelOpen: {
    height: '16px',
    padding: '0 8px',
    minWidth: '40px',
    maxWidth: '198px',
    width: 'auto',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    fontSize: '0.75rem',
    color: '#fff',
    lineHeight: '16px',
  },
});

export default styles;
