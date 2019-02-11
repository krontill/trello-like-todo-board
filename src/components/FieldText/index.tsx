import React from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import Subject from '@material-ui/icons/Subject';
import StyledTextField from './styles';

interface FieldTextProps {
  text?: string;
  handleChange: (e: React.SyntheticEvent<HTMLInputElement>) => void;
}

const FieldText = (props: FieldTextProps) => {
  const { text, handleChange } = props;
  return (
    <StyledTextField
      multiline
      id="text"
      label="Text"
      value={text}
      onChange={handleChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Subject />
          </InputAdornment>
        ),
      }}
    />
  );
};

FieldText.defaultProps = {
  text: '',
};

export default FieldText;
