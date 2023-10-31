import SearchingForm from 'components/SearchForm/SearchingForm';
import { useSelector } from 'react-redux';
import { MainTitle, SearchShowSection } from './ShowsPage.styled';
import Loader from 'components/Loader/Loader';
import ListOrMessage from 'components/ListOrMessage/ListOrMessage';

function ShowsPage() {
  const isLoading = useSelector(state => state.shows.isLoading);

  return (
    <SearchShowSection>
      <MainTitle>List of TV shows</MainTitle>
      <SearchingForm />
      {isLoading && <Loader />}
      <ListOrMessage />
    </SearchShowSection>
  );
}

export default ShowsPage;
