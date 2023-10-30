import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { GetShowsList } from 'store/operations';

function SearchingForm() {
  const [inputtedText, setInputtedText] = useState('');
  const dispatch = useDispatch();

  const onInputChange = async evt => {
    setInputtedText(evt.target.value);

    if (inputtedText.length < 2) return;
    dispatch(GetShowsList(inputtedText));
  };

  return (
    <form>
      <input type="text" value={inputtedText} onChange={onInputChange} />
    </form>
  );
}

export default SearchingForm;
