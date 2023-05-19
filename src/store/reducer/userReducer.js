import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'user',
    initialState: {
        name: '',
        email: ''
    },
    reducers: {
        changeName: (state, payload) => {
            console.log(payload);
            state.name = payload.payload
        },
        changeEmail: (state, payload) => {
            state.email = payload.payload
        }
    }

})

const { changeName, changeEmail } = userSlice.actions
const userReducer = userSlice.reducer

export { changeName, changeEmail, userReducer }

