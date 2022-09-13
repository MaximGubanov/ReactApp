import { configureStore } from '@reduxjs/toolkit';
import wordsReducer from './wordsSlice';

export default configureStore({
    reducer: {
        words: wordsReducer,
    },
});