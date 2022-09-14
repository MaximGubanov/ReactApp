import { configureStore } from '@reduxjs/toolkit'

import wordsReducer from './wordsSlice'
import modalReducer from './modalSlice'

export default configureStore({
    reducer: {
        words: wordsReducer,
        modal: modalReducer,
    },
});