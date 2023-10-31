import { useMediaQuery } from 'react-responsive';
import {
  LoaderItemImageContainer,
  LoaderItemParagraphContainer,
  LoaderItemTitleContainer,
  LoaderList,
  LoaderListItem,
} from './Loader.styed';

function Loader() {
  const isLargeScreen = useMediaQuery({ minWidth: 1440 });
  const isTablet = useMediaQuery({ minWidth: 768 });

  const ArrLength = () => {
    let Arr = [0];

    if (isTablet && !isLargeScreen) {
      Arr = Arr.concat([0, 0]);
    }

    if (isLargeScreen) {
      Arr = Arr.concat([0, 0, 0]);
    }
    return Arr;
  };

  return (
    <LoaderList>
      {ArrLength().map((_, i) => (
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
