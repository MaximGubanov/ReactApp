import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { fetchWords } from '../redux/wordsSlice'
import { Button } from './Button'


const StateBar = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: #7D71D8;
    gap: 1.5rem;
    background-color: #fff;
    box-shadow: 0px 5px 10px rgba(9, 11, 30, 0.5);
    border-radius: 8px;
    padding: 1rem;
    position: sticky;
    top: 4rem;

    @media (max-width: 1024px) {
        justify-content: center;
    }

    @media (max-width: 768px) {
        top: 6.4rem;
        margin-top: 8rem;
    }

    @media (max-width: 425px) {
        flex-wrap: wrap;
        line-height: 1rem;
    }
`;


export const Statebar = () => {

    const dispatch = useDispatch()
    const url = useSelector(state => state.words.url)
    const totalLearned = useSelector(state => state.words.totalLearned)
    const totalRepetition = useSelector(state => state.words.forRepetition)
    const words = useSelector(state => state.words.words)

    const getWords = () => {
        dispatch(fetchWords(url))
    }

    return (
        <StateBar>
            <div><Link to='all-words'>Новые слова ({ words.length })</Link></div>

            { totalLearned ? <div><Link to='learned-words'>Изученные ({ totalLearned })</Link></div> : null }
            { totalRepetition ? <div><Link to='repeat-words'>На повторение ({ totalRepetition })</Link></div> : null }

            <Link to='all-words' onClick={getWords}>
                <div>
                    <Button title={ words.length ? 'Загрузить ещё' : 'Получить карточки' } />
                </div>
            </Link>
        </StateBar>
    )
}
