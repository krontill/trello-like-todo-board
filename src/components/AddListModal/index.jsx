import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addList } from '../../actions/list';
import ListModal from '../ListModal';

const AddListModal = props => {
  const { handleAddList } = props;
  return <ListModal action={handleAddList} />;
};

AddListModal.propTypes = {
  handleAddList: PropTypes.func.isRequired,
};

const mapStateToProps = ({ list }) => ({ list });

const mapDispatchToProps = dispatch => ({
  handleAddList: list => dispatch(addList(list)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddListModal);
