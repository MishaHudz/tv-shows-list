import SearchingForm from 'components/SearchForm/SearchingForm';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

function ShowsPage() {
  const isLoading = useSelector(state => state.shows.isLoading);

  useEffect(() => {
    console.log(isLoading);
  }, [isLoading]);

  return (
    <>
      <SearchingForm />
      {isLoading && <p>Loading</p>}
    </>
  );
}

export default ShowsPage;
