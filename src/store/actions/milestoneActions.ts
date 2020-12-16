import * as actionTypes from "./actionTypes";
import axios from "axios";


export const sendMilestoneSuccess = () => {
    return {
      type: actionTypes.SEND_MILESTONE_SUCCESS,
    };
  };
  
  export const sendMilestoneFail = () => {
    return {
      type: actionTypes.SEND_MILESTONE_FAIL,
    };
  };
  
  export const sendMilestoneStart = () => {
    return {
      type: actionTypes.SEND_MILESTONE_START,
    };
  };
  

  export const sendMilestone = (milestone : actionTypes.Milestone) : actionTypes.sendMilestoneTypes => {
    return {
      sendMilestoneStart();
      axios
        .post("http://localhost:8080/new-project", milestone)
        .then((res) => {
          dispatch(sendMilestoneSuccess());
        })
        .catch((err) => {
          dispatch(sendMilestoneFail());
        });
    };
  };