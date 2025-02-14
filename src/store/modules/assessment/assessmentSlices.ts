import { createAsyncThunk, createSlice,  } from "@reduxjs/toolkit";
import { IAssessment, IAssessmentPayload } from "../../../types";
import { setLoading } from "../Loading/loadingSlice";
import { RootState } from "../..";
import { createAssessment, deleteAssessment, getAssessment } from "../../../services/assessment";

const initialState: IAssessment[] = []

export const listAssessment = createAsyncThunk('assessments/listAssessmnets', async (_, config) => {
  config.dispatch(setLoading(true))

  const { user } = config.getState() as RootState

  if(!user){
    return []
  }

  const result = await getAssessment({
    id: user.id,
    token: user.token
  })

  config.dispatch(setLoading(false))

  return result
})

export const createAssessmentsThunk = createAsyncThunk('assessments/createAssessments', async ({grade, discipline}: IAssessmentPayload, config) => {
  config.dispatch(setLoading(true))

  const { user } = config.getState() as RootState

  if (!user) {
    return []
  }

  const result = await createAssessment({
    grade,
    discipline,
    id: user.id,
    token: user.token
  })

  config.dispatch(setLoading(false))

  return result
})

export const deleteAssessmentsThunk = createAsyncThunk('assessments/deleteAssessments', async (assessmentId: string, config) => {
  config.dispatch(setLoading(true))

  const { user } = config.getState() as RootState

  if (!user) {
    return []
  }

  const result = await deleteAssessment({
    assessmentId,
    studentId: user.id,
    token: user.token 
  })

  config.dispatch(setLoading(false))

  return result
})

const assessmentsSlice = createSlice({
  name: 'assessments',
  initialState,
  reducers: {},

  extraReducers(builder){
    builder.addCase(listAssessment.pending, () => {
      return []
    })
    builder.addCase(listAssessment.fulfilled, (_, action) => {
      return action.payload
    })
    builder.addCase(listAssessment.rejected, () => {
      return []
    })
    builder.addCase(createAssessmentsThunk.fulfilled, (state, action) => {
      state.push(action.payload)
    })
    builder.addCase(deleteAssessmentsThunk.fulfilled, (state, action) => {
      return state.filter( (item) => item.id !== action.payload.id)

    })
  }
})

export default assessmentsSlice.reducer