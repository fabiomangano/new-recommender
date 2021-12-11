import React from 'react';
import CustomModal from '../custom-modal/CustomModal';
import Button from '../button/Button';
import CreateVodForm from '../create-vod-form/CreateVodForm';
import style from './Recommendation.module.css';

const Recommendation = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div className={style.container}>
      <div className={style.bar}>
        <span>Recommendation</span>
        <span>
          <Button onClick={openModal}> New Vod Rec</Button>&nbsp;
          <Button onClick={openModal}> New Lin Rec</Button>
        </span>
      </div>
      <CustomModal
        title="Create Vod Recommendation"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <CreateVodForm />
      </CustomModal>
    </div>
  );
};

export default Recommendation;
