import { IAssessmentDelete, IAssessmentResponse, ICreateAssessment } from "../types";
import { api } from "./api";

export async function getAssessment({id, token}: IAssessmentResponse) {
    try {
        const response = await api.get(`/students/${id}/assessments`, {headers: {Authorization: token}})

        return response.data.data
    } catch (error) {
        console.log(error);
        
        return []
    }
}

export async function createAssessment(data: ICreateAssessment) {
    try {
        const newAssessment = {
            discipline: data.discipline,
            grade: data.grade
        }

        const response	= await api.post(`/students/${data.id}/assessments`, newAssessment,{headers: {Authorization: data.token}})

        return response.data.data

    } catch (error) {
        console.log(error);
        
        return {}
    }
}

export async function deleteAssessment(data: IAssessmentDelete) {
    try {
        const response	= await api.delete(`/students/${data.studentId}/assessments/${data.assessmentId}`,{headers: {Authorization: data.token}})

        return response.data.data

    } catch (error) {
        console.log(error);
        
        return {}
    }
}
