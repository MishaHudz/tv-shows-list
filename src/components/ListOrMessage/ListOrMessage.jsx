import ShowListItem from 'components/ShowListItem/ShowListItem';
import { SearchShowList } from 'pages/ShowsPage/ShowsPage.styled';
import { useSelector } from 'react-redux';
import { MessageParagraph } from './ListOrMessage.styled';

function ListOrMessage() {
  const showsList = useSelector(state => state.shows.showsList);
  const isLoading = useSelector(state => state.shows.isLoading);

  return (
    <>
      {showsList?.length > 0 && (
        <SearchShowList>
          {showsList?.map(el => (
            <ShowListItem key={el.show.id} element={el} />
          ))}
        </SearchShowList>
      )}

      {showsList?.length === 0 && (
        <MessageParagraph>
          Sorry, nothing found with this search
        </MessageParagraph>
      )}
      {!showsList && !isLoading && (
        <MessageParagraph>Type the show's name</MessageParagraph>
      )}
    </>
  );
}

export default ListOrMessage;
