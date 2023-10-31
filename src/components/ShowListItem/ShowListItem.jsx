import { Link, useLocation } from 'react-router-dom';
import {
  SearchShowListItem,
  ShowListItemImage,
  ShowListItemParagraph,
  ShowListItemTitle,
} from './ShowListItem.styled';

export const NotImageImg =
  'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg';

function ShowListItem({ element: { show } }) {
  const location = useLocation();
  const {
    name,
    rating: { average },
    image,
    id,
  } = show;

  return (
    <SearchShowListItem>
      <Link to={`/${id}${location.search}`}>
        <ShowListItemImage
          width="180px"
          height="252.85px"
          src={image?.medium ? image.medium : NotImageImg}
          alt={name}
        />
        <div>
          <ShowListItemTitle>{name}</ShowListItemTitle>
          <ShowListItemParagraph>
            Rating: {average ? average : 'Not specified'}
          </ShowListItemParagraph>
        </div>
      </Link>
    </SearchShowListItem>
  );
}

export default ShowListItem;
