import React from 'react';
import CardModal from '../../components/CardModal';
import Container from './container';

interface AddCardModalProps {
  listId: string;
  handleAddCard: () => void;
  handleHideModal: () => void;
}

const AddCardModal = (props: AddCardModalProps) => {
  const { handleAddCard, handleHideModal, listId } = props;

  return (
    <CardModal
      listId={listId}
      action={handleAddCard}
      handleHideModal={handleHideModal}
      titleModal="Enter card info"
      btnText="Add card"
    />
  );
};

export default Container(AddCardModal);
