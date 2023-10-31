import ShowPageSection from 'components/ShowPageSection/ShowPageSection';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { GetShowsList } from 'store/operations';
import { findShow } from 'store/showsSlice';

function ShowPage() {
  const { id } = useParams();
  const showsList = useSelector(state => state.shows.showsList);
  const show = useSelector(state => state.shows.show);

  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (showsList) return;
    dispatch(GetShowsList(location.state?.search.slice(8)));
  }, [dispatch, location.state?.search, showsList]);

  useEffect(() => {
    if (show) return;

    dispatch(findShow(id));
  }, [dispatch, id, show]);

  return <ShowPageSection />;
}

export default ShowPage;
