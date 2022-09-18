import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

import { Container } from './Container'
import { enablePaginations } from '../redux/paginationSlice'


const Paginations = styled.div`
    display: flex;
    justify-content: center;
    gap: .5rem;
`;

const PageBtn = styled.div`
    width: 3rem;
    padding: 6px;
    border: 1px solid blue;
    border-radius: 4px;
    text-align: center;
    cursor: pointer;
    &:hover {background-color: #c9c9c9;}
`;

export const Pagination = ({wordsSet, actionSlice}) => {

    const dispatch = useDispatch()
    const pageRange = useSelector(state => state.paginations.pageRange)
    const enable = useSelector(state => state.paginations.enable)

    if (wordsSet.length > pageRange) {
        dispatch(enablePaginations(true))
    } else {
        dispatch(enablePaginations(false))
    }

    function calcPages() {
        // расчёт страниц в пагинации, расчёт производится делением кол-ва слов в массиве 'words' на 
        // pageRange - кол-во элементов (карточек) на странице
        let pages = []
        let number = 0
        
        for (let i = 1; i <= wordsSet.length; i = i + pageRange) {
            pages.push(++number)
        }
        
        return pages // возвращает масив страниц для пагинации, пример: [1, 2, 3, 4, 5, 6, 7, 8]
    }
    
    const setSlice = (index) => {
        // настройка среза из массива для текущей кнопки-страницы в пагинации
        let start = pageRange * index
        let end = start + pageRange

        dispatch(actionSlice({start, end}))
    }

    const pages = calcPages() // генерируем пагинацию

    return (
        <Container>
            {enable ? 
                <Paginations>
                    { pages.map((page, index) => 
                        <PageBtn 
                            key={index}
                            onClick={() => setSlice(index)}
                            > 
                            {page}
                        </PageBtn>) 
                    }
                </Paginations>
            : null
            }
        </Container>
    )
}