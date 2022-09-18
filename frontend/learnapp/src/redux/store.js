import { configureStore } from '@reduxjs/toolkit'

import wordsReducer from './wordsSlice'
import modalReducer from './modalSlice'
import paginationReducer from './paginationSlice'


export default configureStore({
    reducer: {
        words: wordsReducer,
        modal: modalReducer,
        paginations: paginationReducer, 
    }
})