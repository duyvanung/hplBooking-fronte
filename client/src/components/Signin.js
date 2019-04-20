import React from 'react'
import api from './api';
require('../css/SignIn.css');


class Signin extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      form: {
        username: '',
        password: '',
        name: '',
        email: '',
        address: '',
        role: 0,
        SSN: '',
        phoneNumber: '',
        sex: '',
        DoB: '1998-05-03'
      },
      err: false,
    };
  }


  onSubmit(e) {
    e.preventDefault();
    let name = this.state.form['name'];
    let username = this.state.form['username'];
    console.log(username);
    let password = this.state.form['password'];
    let email = this.state.form['email'];
    let address = this.state.form['address'];
    let role = this.state.form['role'];
    let SSN = this.state.form['SSN'];
    let phoneNumber = this.state.form['phoneNumber'];
    let DoB = this.state.form['DoB'];
    let sex = this.state.form['sex'];

    api
      .signup(name, username, password, email,  role, address, SSN, phoneNumber, DoB, sex)
      .then(status => {
        this.props.history.replace('/');
        this.forceUpdate();
      })
      .catch(err => {
        // alert("Input is false. Check again!");
        alert(err);
      });

  }








  
  handleChange = (key, value) => {
    this.setState({
      form: Object.assign(this.state.form, { [key]: value }),
    });
  };


  render() {
    return (
      <div>
        <section className="login-wrap">
          <div className="main_w3agile">
            <input id="tab-1" type="radio" name="tab" className="sign-in" defaultChecked />
            <label htmlFor="tab-1" className="tab">Sign In</label>
            <input id="tab-2" type="radio" name="tab" className="sign-up" />
            <label htmlFor="tab-2" className="tab">Sign Up</label>
            <div className="login-form">
              {/* signin form */}
              <div className="signin_wthree">
                <form method="post" action="#">
                  <div className="group">
                    <label htmlFor="user" className="label">Username</label>
                    <input id="user" type="text" className="input" required />
                  </div>
                  <div className="group">
                    <label htmlFor="pass" className="label">Password</label>
                    <input id="pass" type="password" className="input" data-type="password" required />
                  </div>
                  <div className="group">
                    <input id="check" type="checkbox" className="check" defaultChecked />
                    <label htmlFor="check">
                      <span className="icon" /> Keep me Signed in</label>
                  </div>
                  <div className="group">
                    <input type="submit" className="button" defaultValue="Sign In" />
                  </div>
                  <div className="hr" />
                  <div className="foot-lnk">
                    <h2><a href="#">Forgot Password?</a></h2>
                  </div>
                </form>
              </div>
              {/* //signin form */}
              {/* signup form */}
              <div className="signup_wthree">
                <form
                  model={this.state.form}
                  onSubmit={this.onSubmit.bind(this)} >
                  <div className="group">
                    <label htmlFor="user1" className="label">Username</label>
                    <input type="text" className="input" 
                      value={this.state.form.username}
                      onChange={this.handleChange.bind(this, 'username')}
                    required />
                  </div>
                  <div className="group">
                    <label htmlFor="password1" className="label">Password</label>
                    <input id="password1" type="password" className="input" data-type="password"      
                      value={this.state.form.password}
                      // onChange={this.handleChange.bind(this, 'password')}           
                    required />
                  </div>
                  <div className="group">
                    <label htmlFor="password2" className="label">Re-Enter Password</label>
                    <input id="password2" type="password" className="input" data-type="password"
                    
                    value={this.state.form.password}
                    // onChange={this.handleChange.bind(this, 'password')}  
                    
                    required />
                  </div>
                  <div className="group">
                    <label htmlFor="email" className="label">Email Address</label>
                    <input id="email" type="email" className="input"
                       value={this.state.form.email}
                      //  onChange={this.handleChange.bind(this, 'email')}              
                    required />
                  </div>
                  <div className="group">
                    <input type="submit" className="button" defaultValue="Sign Up" />
                  </div>
                  <div className="hr" />
                  <div className="foot-lnk">
                    <label htmlFor="tab-1">Already Member? </label>
                  </div>
                </form>
              </div>
              {/* //signup form */}
            </div>
          </div>
        </section>
      </div>

    )
  }

}

export default Signin

