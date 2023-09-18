import { Modal } from '../Modal/Modal';
import { GalleryItemImage, ImageGalleryEl } from './ImageGalleryItem.styled';
import { PortalWithState } from 'react-portal';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

export const ImageGalleryItem = ({ imgS, imgL }) => {
  return (
    <PortalWithState
      closeOnEsc
      onOpen={() => disableBodyScroll(Modal)}
      onClose={() => enableBodyScroll(Modal)}
    >
      {({ openPortal, closePortal, isOpen, portal }) => (
        <>
          <ImageGalleryEl>
            <GalleryItemImage src={imgS} alt="Small img" onClick={openPortal} />
          </ImageGalleryEl>
          {portal(<Modal img={imgL} closeModal={closePortal} />)}
        </>
      )}
    </PortalWithState>
  );
};