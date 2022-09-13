import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { fetchWords } from '../redux/wordsSlice'
import { Button } from './Button'


const Aside = styled.aside`
    color: #7D71D8;
    gap: 1rem;
    border: 1px solid #7D71D8;
    border-radius: 6px;
    padding: 1rem;
    position: fixed;
    min-width: 20rem;
`;


export const SideBar = () => {

    const dispatch = useDispatch()
    const url = useSelector(state => state.words.url)
    const totalLearned = useSelector(state => state.words.totalLearned)
    const totalRepetition = useSelector(state => state.words.forRepetition)
    const words = useSelector(state => state.words.words)

    const getWords = () => {
        dispatch(fetchWords(url))
    }

    return (
        <Aside>
            <div><Link to='all-words'>Новые слова ({ words.length })</Link></div>
            <div><Link to='learned-words'>Изученные ({ totalLearned })</Link></div>
            <div><Link to='repeat-words'>На повторение ({ totalRepetition })</Link></div>
            <br/>
            <Link to='all-words' onClick={getWords}>
                <div>
                    <Button title={ words.length ? 'Загрузить ещё' : 'Получить карточки' } />
                </div>
            </Link>
        </Aside>
    )
}
