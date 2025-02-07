import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IAssessment {
  id: string
  discipline: string
  grade: number,
  idStudent: string
}

const initialState: IAssessment[] = [
  {
    id: '123456',
    discipline: 'Banco de Dados II',
    grade: 10,
    idStudent: '123'
  },
  {
    id: '123457',
    discipline: 'React III',
    grade: 8,
    idStudent: '123'
  }
]

const assessmentsSlice = createSlice({
  name: 'assessments',
  initialState,
  reducers: {
    addAssessment: (state, action: PayloadAction<IAssessment>) => {
      state.push(action.payload)
    },
    deleteAssessment: (state, action: PayloadAction<string>) => {
      const index = state.findIndex(assesment => assesment.id === action.payload)
      if (index !== -1) {
        state.splice(index, 1)
      }
    }
  }
})

export const {addAssessment, deleteAssessment} = assessmentsSlice.actions
export default assessmentsSlice.reducer