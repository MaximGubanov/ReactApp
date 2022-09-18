import React from 'react'
import { useSelector } from 'react-redux'

import { CardsList } from '../components/CardsList'
import { Pagination } from '../components/Paginations'
import { setCurrentSliceLernedWords } from '../redux/paginationSlice'


export const LearnedPage = () => {

    const {start, end} = useSelector(state => state.paginations.currentSliceLernedWords)

    const words = useSelector(state => state.words.words)
    const filteredWords = words.filter(word => word.learned === true)

    return (
        <>
            <CardsList words={filteredWords.slice(start, end)} />
            <Pagination 
                wordsSet={filteredWords}
                actionSlice={setCurrentSliceLernedWords}
            />
        </>
    )
}