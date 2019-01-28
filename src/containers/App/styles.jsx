import {
  BLUE,
  YELLOW,
  GREEN,
  ORANGE,
  RED,
  PURPLE,
} from '../../constants/colors';
import mount from './mount.jpg';
import sea from './sea.jpg';

const styles = () => ({
  app: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    color: '#17394d',
  },
  'app--blue': {
    background: BLUE,
  },
  'app--yellow': {
    background: YELLOW,
  },
  'app--green': {
    background: GREEN,
  },
  'app--orange': {
    background: ORANGE,
  },
  'app--red': {
    background: RED,
  },
  'app--purple': {
    background: PURPLE,
  },
  'app--mount': {
    background: `url("${mount}") no-repeat center center`,
    backgroundSize: 'cover',
  },
  'app--sea': {
    background: `url("${sea}") no-repeat center center`,
    backgroundSize: 'cover',
  },
  header: {
    background: 'rgba(0, 0, 0, .35)',
    height: '48px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  toolBar: {
    display: 'flex',
  },
});

export default styles;
