import React from 'react';
import StyledFieldButton from './styles';

interface FieldButtonProps {
  btnText: string;
  handleClick: () => void;
}

const FieldButton = (props: FieldButtonProps) => {
  const { btnText, handleClick } = props;
  return (
    <StyledFieldButton variant="contained" onClick={handleClick}>
      {btnText}
    </StyledFieldButton>
  );
};

export default FieldButton;
