import { FilterStyled } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch(); 
  
  const filterValue = evt => {
    dispatch(changeFilter(evt.currentTarget.value));
  };
  
  return (
    <FilterStyled>
      <label>Find contacts by name</label>
      <br/>
      <input type="search"  onChange={filterValue} />
    </FilterStyled>
  );
};



