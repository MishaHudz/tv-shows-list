import SearchingForm from 'components/SearchForm/SearchingForm';
import ShowListItem from 'components/ShowListItem/ShowListItem';
import { useSelector } from 'react-redux';
import {
  MainTitle,
  SearchShowList,
  SearchShowSection,
} from './ShowsPage.styled';
import Loader from 'components/Loader/Loader';

function ShowsPage() {
  const isLoading = useSelector(state => state.shows.isLoading);
  const showsList = useSelector(state => state.shows.showsList);

  return (
    <SearchShowSection>
      <MainTitle>List of TV shows</MainTitle>
      <SearchingForm />
      {isLoading && <Loader />}
      <SearchShowList>
        {showsList?.map(el => (
          <ShowListItem key={el.show.id} element={el} />
        ))}
      </SearchShowList>
    </SearchShowSection>
  );
}

export default ShowsPage;
