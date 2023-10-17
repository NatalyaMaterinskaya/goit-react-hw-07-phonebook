import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { changeFilter } from 'redux/filterSlice';
import { Label, Input } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const handleChangeFilter = evt => {
    dispatch(changeFilter(evt.target.value));
  };
  return (
    <Label>
      Find contacts by name
      <Input type="text" value={filter} onChange={handleChangeFilter} />
    </Label>
  );
};
