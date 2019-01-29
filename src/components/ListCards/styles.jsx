import React from 'react';
import { styled } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';

export const StyledCard = styled(({ ...props }) => <Card {...props} />)({
  width: 272,
  margin: '4px',
  flexShrink: 0,
  background: '#dfe3e6',
});

export const StyledCardActionArea = styled(({ ...props }) => (
  <CardActionArea {...props} />
))({
  padding: '8px 16px',
});

export const StyledHeaderContent = styled(({ ...props }) => (
  <CardHeader {...props} />
))({
  overflow: 'hidden',
});

export const StyledTitle = styled(({ ...props }) => (
  <Typography {...props} />
))({
  padding: '0 0 4px 4px',
  overflowWrap: 'break-word',
  margin: '0 0 5px 0',
});

export const StyledInput = styled(({ ...props }) => (
  <Input {...props} />
))({
  lineHeight: '1.35417em',
  fontSize: '1.5rem',
  fontWeight: '400',
  background: 'white',
  padding: '0 0 0 4px',
});
