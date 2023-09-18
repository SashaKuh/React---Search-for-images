import { useState, useEffect } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { getImages } from 'utils/api';
import { Loader } from './Loader/Loader';

export const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [error, setError] = useState(false);
  const [cards, setCards] = useState([]);
  const [totalHits, setTotalHits] = useState(-1);
  const [loaderVisible, setLoaderVisible] = useState(false);

  useEffect(() => {
    if (!query) {
      return;
    }

    if (page === 1) {
      setCards([]);
    }

    const fetchData = async () => {
      const queryParam = query.split('/')[1];
      try {
        setLoaderVisible(true);
        const resp = await getImages(queryParam, page);
        setCards(prevCards => [...prevCards, ...resp.hits]);
        setTotalHits(resp.totalHits);
        setError(false);
      } catch {
        setError(true);
      } finally {
        setLoaderVisible(false);
      }
    };

    fetchData();
  }, [page, query]);

  const onSubmitQuery = e => {
    e.preventDefault();
    const inputValue = e.target[0].value;
    if (!inputValue) return;

    const id = new Date();
    const newQuery = `${id}/${inputValue}`;
    setQuery(newQuery);
    setPage(1); 
    setError(false);
  };

  const onLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <>
      <Searchbar onSubmitQuery={onSubmitQuery} />
      <Loader visible={loaderVisible} />
      {error || (totalHits === 0 && page === 1) ? (
        <p>Error try again</p>
      ) : (
        <ImageGallery
          cards={cards}
          totalHits={totalHits}
          onLoadMore={onLoadMore}
        />
      )}
    </>
  );
};
