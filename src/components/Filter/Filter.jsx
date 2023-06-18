import { Label, Input } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'store/selectors';
import { setFilter } from 'store/filterSlice';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <div>
      <Label>
        Find contacts by name
        <Input
          type="text"
          name="filter"
          value={filter}
          onChange={e => dispatch(setFilter(e.currentTarget.value))}
        />
      </Label>
    </div>
  );
};

export default Filter;
