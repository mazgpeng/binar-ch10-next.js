import { createSlice } from '@reduxjs/toolkit'

const loginSlice = createSlice({
    name: 'isLogin',
    initialState: {
        isLogin: false,
        
    },
    reducers: {
        changeState: (state, payload) => {
            console.log(payload);
            state.isLogin = payload.payload
        }
    }

})

const {changeState} = loginSlice.actions
const loginReducer = loginSlice.reducer

export { changeState, loginReducer}

