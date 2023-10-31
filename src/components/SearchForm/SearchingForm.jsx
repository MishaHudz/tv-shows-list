import { useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { GetShowsList } from 'store/operations';
import { SearchShowForm, SearchShowInput } from './SearchingForm.styled';
import { clearShows } from 'store/showsSlice';
import { useSearchParams } from 'react-router-dom';

function SearchingForm() {
  const [request, setRequest] = useSearchParams();
  const filmName = useMemo(() => request.get('search'), [request]);
  const [inputtedText, setInputtedText] = useState(filmName ? filmName : '');

  const dispatch = useDispatch();

  useEffect(() => {
    const showsRequest = inputtedText !== '' ? { search: inputtedText } : {};
    setRequest(showsRequest);

    if (filmName?.length < 2 || !filmName) {
      dispatch(clearShows());
      return;
    }

    dispatch(GetShowsList(filmName));
  }, [dispatch, filmName, inputtedText, setRequest]);

  const onInputChange = async evt => {
    if (evt.target.value.includes('  ')) return;
    setInputtedText(evt.target.value);
  };

  return (
    <SearchShowForm>
      <SearchShowInput
        type="text"
        value={inputtedText}
        onChange={onInputChange}
        placeholder="Search for a TV show"
      />
    </SearchShowForm>
  );
}

export default SearchingForm;
