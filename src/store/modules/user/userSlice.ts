import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface IUser {
    id: string
    name: string
    token: string
}

const initialState: IUser | null = null

const userSlice = createSlice({
    name: 'user',
    initialState: initialState as IUser | null,
    reducers: {
        login: (_, action: PayloadAction<IUser>) => {
            return action.payload
        }
    }
})

export const {login} = userSlice.actions
export default userSlice.reducer