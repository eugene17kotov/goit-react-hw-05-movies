import { Button } from 'components/Button/Button';

export const SearchForm = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="search"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
      />
      <Button type="submit">Search</Button>
    </form>
  );
};
