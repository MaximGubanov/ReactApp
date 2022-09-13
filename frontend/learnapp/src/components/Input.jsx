import { React} from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { filterSearch } from '../redux/wordsSlice';


const Input = styled.input`
    width: 20rem;
    padding: 0 0.5rem;
    border: 1px solid #7D71D8;
    border-radius: 6px;
    background: #e7f7ff;
`;


export const SearchInput = () => {

    const dispatch = useDispatch()
    
    const handlerSearch = (e) => {
        dispatch(filterSearch(e.target.value))
    }
    
    return (
        <label>
            <Input placeholder={'Поиск'} onChange={e => handlerSearch(e)} />
        </label>
    ) 
}