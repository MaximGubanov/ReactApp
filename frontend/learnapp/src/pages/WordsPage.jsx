import React from 'react'
import { useSelector } from 'react-redux'
 
import { CardsList } from '../components/CardsList'


export const AllWords = () => {

    const words = useSelector(state => state.words.words)

    if (words.length === 0) {
        return (<p>Вы ещё не загрузили карточки, нажмите кнопку "Получить карточки"</p>)
    }

    let filteredWords = words.filter(word => word.learned === false && word.repeat === false)
        
    return (
        <CardsList words={filteredWords} />
    )
}