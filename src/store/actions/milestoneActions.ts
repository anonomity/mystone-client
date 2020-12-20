import { SEND_MILESTONE, MilestoneActionTypes, Milestone } from "./actionTypes";

import MilestoneForm from "../../Container/MilestoneForm/MilestoneForm";
import { Dispatch } from "redux";
import axios from "axios";



export const sendMilestone = (newMilestone: Milestone): MilestoneActionTypes => {
 return {
      type: SEND_MILESTONE,
      payload: newMilestone
    }
};

export const sendMilestoneStart = () => {
  return {
      type: SEND_MILESTONE,
  };
};


     // return {
    //   type: SEND_MILESTONE,
    //   payload: newMilestone
    // }