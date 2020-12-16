export const SEND_MILESTONE_START = 'SEND_MILESTONE_START';
export const SEND_MILESTONE_FAIL = 'SEND_MILESTONE_ERROR';
export const SEND_MILESTONE_SUCCESS = 'SEND_MILESTONE_SUCCESS';

export interface Milestone {
    title: string,
    description: string,
    goals: string[],
    duration: Date,
}

interface SendMilestoneStart {
    type: typeof SEND_MILESTONE_START
    payload: Milestone
  }

interface SendMilestoneSuccess {
    type: typeof SEND_MILESTONE_SUCCESS
    payload: String
}

export type sendMilestoneTypes = SendMilestoneStart | SendMilestoneSuccess