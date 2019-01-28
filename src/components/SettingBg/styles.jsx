import {
  BLUE,
  YELLOW,
  GREEN,
  ORANGE,
  RED,
  PURPLE,
} from '../../constants/colors';
import mount from './mount.jpeg';
import sea from './sea.jpeg';

const styles = () => ({
  item: {
    textShadow: '0 0 2px white',
    '&$item--mount, &$item--sea': {
      backgroundSize: 'cover',
      minWidth: '100px',
      width: '100%',
      height: '75px',
    },
  },
  'item--blue': {
    background: BLUE,
  },
  'item--yellow': {
    background: YELLOW,
  },
  'item--green': {
    background: GREEN,
  },
  'item--orange': {
    background: ORANGE,
  },
  'item--red': {
    background: RED,
  },
  'item--purple': {
    background: PURPLE,
  },
  'item--mount': {
    background: `url("${mount}") no-repeat`,
  },
  'item--sea': {
    background: `url("${sea}") no-repeat`,
  },
});

export default styles;
