import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { GetShowsList } from 'store/operations';
import { SearchShowForm, SearchShowInput } from './SearchingForm.styled';

function SearchingForm() {
  const [inputtedText, setInputtedText] = useState('');
  const dispatch = useDispatch();

  const onInputChange = async evt => {
    setInputtedText(evt.target.value);

    if (inputtedText.length < 2) return;
    dispatch(GetShowsList(inputtedText));
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
