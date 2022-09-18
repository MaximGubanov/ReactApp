import { createSlice } from '@reduxjs/toolkit'


const paginationSlice = createSlice({
    name: 'paginations',
    initialState: {
        enable: false,
        pageRange: 8, // отображение кол-ва элементов на странице
        currentSliceAllWords: {start: 0, end: 8},
        currentSliceRepetitionWords: {start: 0, end: 8},
        currentSliceLernedWords: {start: 0, end: 8},
    },
    reducers: {
        enablePaginations (state, actions) {
            state.enable = actions.payload
        },
        setCurrentSliceAllWords (state, actions) {
            state.currentSliceAllWords = actions.payload
        },
        setCurrentSliceRepetitionWords (state, actions) {
            state.currentSliceRepetitionWords = actions.payload
        },
        setCurrentSliceLernedWords (state, actions) {
            state.currentSliceLernedWords = actions.payload
        },
    }
})

export const { 
    enablePaginations,
    setCurrentSliceAllWords, 
    setCurrentSliceRepetitionWords, 
    setCurrentSliceLernedWords } = paginationSlice.actions

export default paginationSlice.reducer