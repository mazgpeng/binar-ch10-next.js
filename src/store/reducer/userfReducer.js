import { createSlice } from '@reduxjs/toolkit'

const userfSLice = createSlice({
    name: 'userf',
    initialState: {
        displayName: "",
        email : "",
        uid : "",
        photoURL : "",
        
    },
    reducers: {
        changeDispname: (state, payload) => {
            console.log(payload);
            state.displayName = payload.payload
        },
        changeEmail: (state, payload) => {
            console.log(payload);
            state.email = payload.payload
        },
        changeUid: (state, payload) => {
            console.log(payload);
            state.uid = payload.payload
        },
        changePhotoURL: (state, payload) => {
            console.log(payload);
            state.photoURL = payload.payload
        }
    }

})

const {changeDispname,changeEmail,changeUid} = userfSLice.actions
const userfReducer = userfSLice.reducer

export { changeDispname, changeEmail,changeUid, userfReducer}

