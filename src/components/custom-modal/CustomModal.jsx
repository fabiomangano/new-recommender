import Modal from 'react-modal';
import Button from '../button/Button';
import style from './CustomModal.module.css';

const CustomModal = ({
  title,
  children,
  variant,
  submit,
  onRequestClose,
  ...rest
}) => {
  return (
    <Modal className={style.modal} overlayClassName={style.overlay} {...rest}>
      <div className={style.header}>
        <h1>{title}</h1>
      </div>
      {children}
      <div className={style.footer}>
        <Button onClick={onRequestClose}>Back</Button>
        <Button type="submit" onClick={submit}>
          Submit
        </Button>
      </div>
    </Modal>
  );
};

export default CustomModal;
