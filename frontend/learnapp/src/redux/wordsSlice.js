import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'


function getRandomNumber(min=1, max=1700) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}

export const fetchWords = createAsyncThunk(
    'words/fetchWords',
    async function (url) {
        try {
            const data = await axios.get(url)
                .then(response => response.data)
                .catch(error => {
                    console.log(error)
                    return error
                })
            return data
        }
        catch(err) {
            console.log(err.message)
        }
    }
)

const wordsSlice = createSlice({
    name: 'words',
    initialState: {
        words: [],
        filterSearch: '',
        totalLearned: 0,
        forRepetition: 0,
        status: null,
        error: null,
        // url: 'http://127.0.0.1:8000/api/words/?page=1',
        url: 'http://194.61.0.120:8000/api/words/?page=1',
    },
    reducers: {
        addWordToLearned (state, actions) {
            const card = state.words.find(word => word.id === actions.payload)
            card.learned = true
            card.repeat = false
            card.show_translate = false
            state.forRepetition = state.words.filter(word => word.repeat === true).length
            state.totalLearned = state.words.filter(word => word.learned).length
        },
        addWordToRepetition (state, actions) {
            const card = state.words.find(word => word.id === actions.payload)
            card.repeat = !card.repeat
            card.show_translate = !card.show_translate
            state.forRepetition = state.words.filter(word => word.repeat === true).length
        },
        filterSearch (state, actions) {
            state.filterSearch = actions.payload.trim().toLowerCase()
        },
    },
    extraReducers: {
        [fetchWords.pending]: (state) => {
            state.status = 'loading'
            state.error = null
        },
        [fetchWords.fulfilled]: (state, actions) => {
            state.status = 'resolved'
            state.words = [...state.words, ...actions.payload.results]
            state.url = actions.payload.next
            state.url = `http://194.61.0.120:8000/api/words/?page=${getRandomNumber()}`
        },
        [fetchWords.rejected]: (state, actions) => {},
    }
})

export const { addWordToLearned, addWordToRepetition, filterSearch } = wordsSlice.actions

export default wordsSlice.reducer