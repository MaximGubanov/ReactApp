import React from 'react'
import { useSelector } from 'react-redux'

import { CardsList } from '../components/CardsList'


export const LearnedPage = () => {

    const words = useSelector(state => state.words.words)
    const filteredWords = words.filter(word => word.learned === true)

    return (
        <CardsList words={filteredWords} />
    )
}