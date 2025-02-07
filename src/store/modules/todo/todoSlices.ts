import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Todo {
    id: string;
    title: string;
}


const initialState: Todo[] = [
    {id: "1", title: 'Olá'},
    {id: "2", title: 'Olá'},
    {id: "3", title: 'Olá'},
    {id: "4", title: 'Olá'},
]
const todoSlices = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<Todo>) => {
            state.push(action.payload)
        }
    }
})

export const { addTodo } = todoSlices.actions;
export default todoSlices.reducer;
