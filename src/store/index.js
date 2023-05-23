import { configureStore } from '@reduxjs/toolkit'
import {userReducer} from './reducer/userReducer'
import { loginReducer } from './reducer/loginReducer'

const store = configureStore ({
    reducer : {
        userReducer,
        loginReducer
    }
})

export {store}