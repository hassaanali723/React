import React from 'react';
import './contact.css';

class Contact extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      Fname: '',
      Lname: '',
      phone: '',
      email: '',
      message: '',
      errorMessage: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
    
    let err='';
    if (this.state.Fname == '' || this.state.lname == '' || this.state.phone == '' || this.state.email == ''
    || this.state.message == ''){
        err = <strong className="error">Please Fill all the required fields</strong>
    }

    else if (this.state.Fname != '' || this.state.lname != '' || this.state.phone != '' || this.state.email != ''
    || this.state.message != ''){
        err = <strong className="submitted">Form is submitted</strong>

    }

    this.setState({
        errorMessage: err
    });

  }


  resetForm(){
    this.setState({name: '', email: '', message: ''})
  }

  render() {
    return(
    <div >
      <div className="form-main">
          <div className="content">
        <h1>Get in Touch </h1>
        <p>We shape ideas into products. Have an idea? React out to us!</p>
          </div>
        <form id="contact-form" onSubmit={this.handleSubmit.bind(this)}>
        <div className="col">
          <div className="form-group">
              <label htmlFor="name">First Name</label>
              <input type="text" placeholder="First Name" className="form-control" id="name" value={this.state.Fname} onChange={this.onFirstNameChange.bind(this)} />       

          </div>
          <div className="form-group">
                <label htmlFor="name">Last Name</label>
                <input type="text" placeholder="Last Name" className="form-control" id="name" value={this.state.Lname} onChange={this.onLastNameChange.bind(this)} />       
                    
          </div>
          </div>

          <div className="col">
          <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" placeholder="Email" className="form-control" id="email" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />

          </div>
          <div className="form-group">
              <label htmlFor="222 333 444">Phone No</label>
              <input type="tel" placeholder="Phone" className="form-control" id="phone" aria-describedby="phoneHelp" value={this.state.phone} onChange={this.onPhoneChange.bind(this)} />
          </div>
          </div>

          <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea className="form-control" placeholder="Enter your Message" rows="5" cols="10" id="message" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
          </div>
          <p className="error">{this.state.errorMessage}</p>
          
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>

      </div>
    );
  }

  onFirstNameChange(event) {
	  this.setState({Fname: event.target.value})
  }
  onLastNameChange(event) {
    this.setState({Lname: event.target.value})
}
onPhoneChange(event) {
    this.setState({phone: event.target.value})
}

  onEmailChange(event) {
	  this.setState({email: event.target.value})
  }

  onMessageChange(event) {
	  this.setState({message: event.target.value})
  }
}

export default Contact;