import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  SearchForm,
  SearchFormButton,
  ButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';

export const Searchbar = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  function handlerSearch(e) {
    searchParams.set('q', e.target.value.trim().toLowerCase());
  }

  const handlerSubmit = e => {
    e.preventDefault();
    setSearchParams({});
    const searchQuery = searchParams.get('q') ?? '';
    if (searchQuery === '') {
      toast.warning('Enter a value in the search bar');
      return;
    }
    setSearchParams(searchParams);
  };

  return (
    <SearchForm onSubmit={handlerSubmit}>
      <SearchFormButton type="submit">
        <ButtonLabel>Search</ButtonLabel>
      </SearchFormButton>
      <SearchFormInput
        type="text"
        name="movie"
        value={searchParams.q}
        onChange={handlerSearch}
        placeholder="Search movie"
      />
    </SearchForm>
  );
};
