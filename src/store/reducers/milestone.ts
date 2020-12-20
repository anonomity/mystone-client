import {SEND_MILESTONE, MilestoneActionTypes, MilestoneState} from "../actions/actionTypes";
import axios from "axios";
const initialState : MilestoneState = {
    milestone : [{}]
}  

export default function milestoneReducer (
    state = initialState,
    action: MilestoneActionTypes
) : MilestoneState { 
    switch(action.type){
        case SEND_MILESTONE:
            return state
        default:
            return state
    }
}