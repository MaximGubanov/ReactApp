import React from 'react'
import { useSelector } from 'react-redux'
 
import { CardsList } from '../components/CardsList'
import { Pagination } from '../components/Paginations'
import { setCurrentSliceAllWords } from '../redux/paginationSlice'


export const AllWords = () => {

    // let {start, end} = useSelector(state => state.words.currentPage) // получаем срез масива для WordsPage.jsx
    const {start, end} = useSelector(state => state.paginations.currentSliceAllWords)

    const words = useSelector(state => state.words.words) // получаем все загруженные слова

    if (words.length === 0) {
        return (<p>Вы ещё не загрузили карточки, нажмите кнопку "Получить карточки"</p>)
    }

    // фильтрация массива слов для главной страницы (т.е. страница, где отображаются все ззагруженные слова)
    let filteredWords = words.filter(word => word.learned === false && word.repeat === false)
        
    return (
        <>
            <CardsList words={filteredWords.slice(start, end)} /> {/* текущий слайс для конкретной кнопки-странцы в пагинации */}
            {/* включем пагинацию */}
            <Pagination 
                wordsSet={filteredWords} 
                actionSlice={setCurrentSliceAllWords} // передаём action в Pagination-компонент
             />
        </>
    )
}