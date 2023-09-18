import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { GalleryList } from './ImageGallery.styled';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Loader } from '../Loader/Loader';

export const ImageGallery = ({ cards, totalHits, onLoadMore }) => {
  return (
    <>
      {cards.length > 0 && (
        <InfiniteScroll
          dataLength={cards.length}
          next={onLoadMore}
          hasMore={cards.length < totalHits}
          loader={<Loader visible={true} />}
          endMessage={
            <p style={{ textAlign: 'center', fontSize: 30, marginTop: 30 }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
          style={{ overflow: 'visible', paddingBottom: 30 }}
        >
          <GalleryList>
            {cards.map(({ id, webformatURL, largeImageURL }) => (
              <ImageGalleryItem
                key={id}
                imgS={webformatURL}
                imgL={largeImageURL}
              />
            ))}
          </GalleryList>
        </InfiniteScroll>
      )}
    </>
  );
};