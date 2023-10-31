import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  GoBackBtn,
  GoBackBtnIcon,
  InformationLink,
  InformationParagraph,
  ShowSection,
  ShowSectionRightContainer,
  ShowTitle,
  SummaryParagraph,
} from './ShowPageSection.styled';
import { NotImageImg } from 'components/ShowListItem/ShowListItem';
import Sprite from '../../assets/images/sprite.svg';

function ShowPageSection() {
  const show = useSelector(state => state.shows.show);

  const navigate = useNavigate();
  const location = useLocation();

  const onGoBackButtonClick = () => {
    navigate(`/${location.search}`);
  };
  return (
    <ShowSection>
      <GoBackBtn onClick={onGoBackButtonClick}>
        <GoBackBtnIcon width="15px" height="13px">
          <use xlinkHref={`${Sprite}#arrow`} />
        </GoBackBtnIcon>
      </GoBackBtn>

      <img
        src={show?.image?.original ? show?.image?.original : NotImageImg}
        alt={show?.name}
        width="320px"
        height="470.59px"
      />

      <ShowSectionRightContainer>
        <ShowTitle>{show?.name}</ShowTitle>
        <InformationParagraph>{`Genres: ${show?.genres.join(
          ', '
        )}`}</InformationParagraph>

        <InformationParagraph>{`Rating: ${
          show?.rating.average ? show?.rating.average : 'Not specified'
        }`}</InformationParagraph>

        <InformationParagraph>
          Link:
          <InformationLink
            href={show?.url}
            target="blank"
            rel="noreferrer noopener"
          >
            {` ${show?.name}`}
          </InformationLink>
        </InformationParagraph>

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
