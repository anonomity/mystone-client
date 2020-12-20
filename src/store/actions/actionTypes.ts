export const SEND_MILESTONE = 'SEND_MILESTONE';


export interface Milestone {
    title: string,
    description: string,
    goals: string[],
    duration: Date,
}

export interface MilestoneState {
    milestone: [Object]
} 

interface SendMilestoneAction {
    type: typeof SEND_MILESTONE
    payload: Milestone
}

interface StartSuccess {
    type: (dispatch : any) => void
}

export type MilestoneActionTypes = SendMilestoneAction | StartSuccess;