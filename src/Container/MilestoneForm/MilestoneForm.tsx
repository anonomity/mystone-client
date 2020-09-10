import React, {Component} from 'react';
import classes from "./MilestoneForm.module.css";

class MilestoneForm extends Component {
    render() {
        return(
            <div className={classes.Background}>
               <h1>Milestone Form</h1> 
            <p>Take 10 - 20 minutes to really think about these questions. The efficiency of the Milestone you create
                   greatly depends on how care you think and answer these questions.
            </p>
            <br/>
               <form className={classes.productForm}>
                   <div className={classes.formControl}>
                       <label>Name of the Milestone</label>
                       <input />
                   </div>
                   <div className={classes.formControl}>
                       <label>Describe the Milestone, think about why you want to do it, how you will do it</label>
                       <textarea />
                   </div>
                   <div className={classes.formControl}>
                       <label>Describe 4 or more major goals you will need to complete in order to accomplish this milestone.</label>
                       <textarea />
                   </div>
                   <div className={classes.formControl}>
                       <label>How long will it take to complete this Milestone?</label>
                       <select>
                           <option>3 months</option>
                           <option>4 months</option>
                           <option>5 months</option>
                           <option>6 months</option>


                       </select>
                   </div>
                   <div className={classes.formControl}>
                       <label>What are some verbs you need to do to achieve the goal</label>
                       <input />
                   </div>



               </form>
                
            </div>
        )
    }
}
export default MilestoneForm