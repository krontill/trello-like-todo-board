import React from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import Title from '@material-ui/icons/Title';
import StyledTextField from './styles';

interface FieldTitleProps {
  title?: string;
  handleChange: (e: React.SyntheticEvent<HTMLInputElement>) => void;
}

const FieldTitle = (props: FieldTitleProps) => {
  const { title, handleChange } = props;
  return (
    <StyledTextField
      required
      id="title"
      label="Required title"
      value={title}
      onChange={handleChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Title />
          </InputAdornment>
        ),
      }}
    />
  );
};

FieldTitle.defaultProps = {
  title: '',
};

export default FieldTitle;
