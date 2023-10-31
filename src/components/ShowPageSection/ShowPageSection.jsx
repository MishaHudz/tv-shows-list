import { useSelector } from 'react-redux';
import {
  GoBackBtn,
  InformationLink,
  InformationParagraph,
  ShowSection,
  ShowSectionRightContainer,
  ShowTitle,
  SummaryParagraph,
} from './ShowPageSection.styled';
import { NotImageImg } from 'components/ShowListItem/ShowListItem';
import { useLocation, useNavigate } from 'react-router-dom';

function ShowPageSection() {
  const show = useSelector(state => state.shows.show);

  const navigate = useNavigate();
  const location = useLocation();

  const onGoBackButtonClick = () => {
    navigate(location.state);
  };
  return (
    <ShowSection>
      <GoBackBtn onClick={onGoBackButtonClick}> </GoBackBtn>
      <img
        src={show?.image?.original ? show?.image?.original : NotImageImg}
        alt={show?.name}
        width="350px"
        height="500px"
      />
      <ShowSectionRightContainer>
        <ShowTitle>{show?.name}</ShowTitle>
        <InformationParagraph>{`Genres: ${show?.genres.join(
          ', '
        )}`}</InformationParagraph>

        <InformationParagraph>{`Rating: ${
          show?.rating.average ? show?.rating.average : 'Not specified'
        }`}</InformationParagraph>

        <InformationLink href={show?.url} target="blank">
          Show Page Link
        </InformationLink>

        <InformationParagraph>{`Status: ${show?.status}`}</InformationParagraph>

        <InformationParagraph>{`Schedule: ${
          show?.schedule?.time
            ? `${`Days: ${show.schedule.days.join(',')} Hour: ${
                show.schedule.time
              }`}`
            : 'Not specified'
        }`}</InformationParagraph>

        {show?.summary && (
          <SummaryParagraph>
            {show?.summary?.replace(/<[^>]*>/g, '')}
          </SummaryParagraph>
        )}
      </ShowSectionRightContainer>
    </ShowSection>
  );
}

export default ShowPageSection;
