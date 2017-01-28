import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField';


class CommentForm extends Component {
  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <div className="comment-form">
      <h5>Leave a comment!</h5>
      <form onSubmit={handleSubmit}>
           <div className="form-group">
            <label>Your Name</label>
             <div>
               <Field className="form-control" name="posted_by" component="input" type="text" placeholder="Kayla The Great Blog Writer"/>
             </div>
           </div>

           <div className="form-group">
            <label>Your Comment</label>
             <div>
               <Field className="form-control" name="text" component="textarea" type="text" placeholder="Example: This is the greatest post ever"/>
             </div>
           </div>
           <div>
             <button className="btn btn-primary" type="submit">Post Comment</button>
             
           </div>
         </form>
         </div>
    );
  }
}

// Decorate the form component
CommentForm = reduxForm({
  form: 'comment' // a unique name for this form
})(CommentForm);

export default CommentForm;
