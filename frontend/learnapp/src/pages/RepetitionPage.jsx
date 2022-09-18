import React from 'react'
import { useSelector } from 'react-redux'

import { CardsList } from '../components/CardsList'
import { Pagination } from '../components/Paginations'
import { setCurrentSliceRepetitionWords } from '../redux/paginationSlice'


export const RepetitionPage = () => {

    const {start, end} = useSelector(state => state.paginations.currentSliceRepetitionWords)

    const words = useSelector(state => state.words.words)
    const filteredWords = words.filter(word => word.repeat === true)

    return (
        <>
            <CardsList words={filteredWords.slice(start, end)} />
            <Pagination 
                wordsSet={filteredWords} 
                actionSlice={setCurrentSliceRepetitionWords}
            />
        </>
    )
} 