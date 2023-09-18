import { ModalImg, Overlay } from './Modal.styled';

export const Modal = ({ img, closeModal }) => {
  const closeModalClickOnOverlay = e => {
    if (e.target.localName === 'div') closeModal();
  };
  return (
    <Overlay onClick={closeModalClickOnOverlay}>
      <ModalImg src={img} alt="Big img" />
    </Overlay>
  );
};