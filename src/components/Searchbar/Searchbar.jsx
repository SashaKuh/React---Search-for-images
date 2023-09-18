import { BiSearch } from 'react-icons/bi';
import {
  SearchButton,
  SearchForm,
  SearchInput,
  SearchbarWrapper,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmitQuery }) => {
  return (
    <SearchbarWrapper>
      <SearchForm onSubmit={onSubmitQuery}>
        <SearchInput
          type="text"
          autoComplete="off" 
          autoFocus
          placeholder="Search images and photos"
        />
        <SearchButton type="submit">
          <BiSearch />
        </SearchButton>
      </SearchForm>
    </SearchbarWrapper>
  );
};
