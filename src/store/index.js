import { configureStore } from '@reduxjs/toolkit'
import {userReducer} from './reducer/userReducer'
import { loginReducer } from './reducer/loginReducer'
import { userfReducer } from './reducer/userfReducer'

const store = configureStore ({
    reducer : {
        userReducer,
        loginReducer,
        userfReducer
    }
})

export {store}