import axios from 'axios';

axios.defaults.baseURL = 'https://api.tvmaze.com';

export async function FetchShowsList(searchingString) {
  const { data } = await axios.get(`search/shows?q=${searchingString}`);
  return data;
}
