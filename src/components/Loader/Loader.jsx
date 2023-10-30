import {
  LoaderItemImageContainer,
  LoaderItemParagraphContainer,
  LoaderItemTitleContainer,
  LoaderList,
  LoaderListItem,
} from './Loader.styed';

const Arr = [0, 0, 0, 0];

function Loader() {
  return (
    <LoaderList>
      {Arr.map((_, i) => (
        <LoaderListItem key={i}>
          <LoaderItemImageContainer></LoaderItemImageContainer>
          <LoaderItemTitleContainer></LoaderItemTitleContainer>
          <LoaderItemParagraphContainer></LoaderItemParagraphContainer>
        </LoaderListItem>
      ))}
    </LoaderList>
  );
}

export default Loader;
