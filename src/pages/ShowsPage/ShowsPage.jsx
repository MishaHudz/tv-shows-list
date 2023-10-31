import SearchingForm from 'components/SearchForm/SearchingForm';
import { useSelector } from 'react-redux';
import {
  MainTitle,
  MainTitleAccent,
  SearchShowSection,
} from './ShowsPage.styled';
import Loader from 'components/Loader/Loader';
import ListOrMessage from 'components/ListOrMessage/ListOrMessage';

function ShowsPage() {
  const isLoading = useSelector(state => state.shows.isLoading);

  return (
    <SearchShowSection>
      <MainTitle>
        List of <MainTitleAccent>TV shows</MainTitleAccent>
      </MainTitle>
      <SearchingForm />
      {isLoading && <Loader />}
      <ListOrMessage />
    </SearchShowSection>
  );
}

export default ShowsPage;
