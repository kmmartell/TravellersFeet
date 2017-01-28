import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField';
import { fetchPost } from '../../actions';
const data = {  // used to populate "account" reducer when "Load" is clicked
  title: 'Hello',
  content: 'Sup'
}

class PostForm extends Component {
  render() {
    const { handleSubmit, pristine, reset, submitting, title, content } = this.props;
    return (
      <form onSubmit={handleSubmit}>
           <div className="form-group">
             <label>Title</label>
             <div>
               <Field className="form-control" name="title"
               component="input" type="text" placeholder="Snappy blog post title"/>
             </div>
           </div>

           <div className="form-group">
             <label>Your Snazzy Blog Post</label>
             <div>
               <Field className="form-control content" name="content" component="textarea" type="text" placeholder=""/>
             </div>
           </div>
           <div className="form-group">
             <label>Categories</label>
             <div>
               <Field className="form-control" name="categories" component="input" type="text" />
             </div>
           </div>
           <div className="form-group">
             <label>Current City</label>
             <div>
               <Field className="form-control" name="city" component="input" type="text" placeholder="Where are you now?"/>
             </div>
           </div>
           <div className="form-group">
             <label>Journey</label>
             <div>
               <Field className="form-control" name="journey" component="input" type="text" placeholder="What travel are you on?"/>
             </div>
           </div>

           <div>
             <button className="btn btn-primary" type="submit">Submit</button>
             <button className="btn btn-default" type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
           </div>
         </form>
    );
  }
}


// Decorate the form component
PostForm = reduxForm({
  form: 'contact' // a unique name
})(PostForm);

PostForm = connect(
  state => ({
    initialValues: state.posts.activePost
  })
)(PostForm);

export default PostForm;
