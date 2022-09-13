import { useSelector } from 'react-redux'

import { CardsList } from '../components/CardsList'


export const RepetitionPage = () => {

    const words = useSelector(state => state.words.words)
    const filteredWords = words.filter(word => word.repeat === true)

    return (
        <CardsList words={filteredWords} />
    )
} 