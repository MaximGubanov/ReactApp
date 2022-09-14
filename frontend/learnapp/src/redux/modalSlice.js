import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


export const fetchImage = createAsyncThunk(
    'modal/fetchImage',
    async function (en) {
        try {
            console.log(en)
            const url = 'https://www.flickr.com/services/rest/'
            const apiKey = '3a2f40d7f1dd5e73b71e41f70ae4d648'
            const imageURL = await axios.get(`${url}?method=flickr.photos.search&api_key=${apiKey}&tags=${en}&text=${en}&format=json&nojsoncallback=1`)
                .then(response => {

                    const imageURL = response.data.photos.photo[5]
                    const farmId = imageURL['farm']
                    const serverId = imageURL['server']
                    const id = imageURL['id']
                    const secret = imageURL['secret']
                    
                    return `https://farm${farmId}.staticflickr.com/${serverId}/${id}_${secret}.jpg`
                })
                .catch(error => {
                    console.log(error)
                    return error
                })
            console.log(imageURL)
            return imageURL
        }
        catch(err) {
            console.log(err.message)
        }
    }
)

const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        isModalVisible: false,
        imageURL: 'http://',
        status: '',
        error: '',
    },
    reducers: {
        openModal (state, actions) {
            state.isModalVisible = true
            console.log(actions.payload)
            fetchImage()
            console.log(state.imageURL)
        },
        closeModal (state) {
            state.isModalVisible = false
            state.imageURL = null
        },
    },
    extraReducers: {
        [fetchImage.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchImage.fulfilled]: (state, actions) => {
            state.status = 'resolved'
            state.imageURL = actions.payload
        },
        [fetchImage.rejected]: (state, actions) => {},
    }
})


export const { openModal, closeModal } = modalSlice.actions

export default modalSlice.reducer