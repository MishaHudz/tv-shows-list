import {
  SearchShowListItem,
  ShowListItemImage,
  ShowListItemParagraph,
  ShowListItemTitle,
} from './ShowListItem.styled';

function ShowListItem({ element: { show } }) {
  const {
    name,
    rating: { average },
    image: { medium },
  } = show;

  return (
    <SearchShowListItem>
      <ShowListItemImage
        width="180px"
        height="252.85px"
        src={medium}
        alt={name}
      />
      <div>
        <ShowListItemTitle>{name}</ShowListItemTitle>
        <ShowListItemParagraph>
          Rating: {average ? average : 'Not specified'}
        </ShowListItemParagraph>
      </div>
    </SearchShowListItem>
  );
}

export default ShowListItem;
