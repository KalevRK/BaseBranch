var React = require('react');
var Reflux = require('reflux');
var mui = require('material-ui');
var TextField = mui.TextField;
var RaisedButton = mui.RaisedButton;
var LoginStyles = require('../styles/LoginStyles.js');
var LoginStore = require('../stores/LoginStore.js');
var LoginActions = require('../actions/LoginActions.js');
var Paper = mui.Paper;

var LoginView = React.createClass({
  getInitialState: function(){
    return {
      username: '',
      password: ''
    };
  },
  handleUser: function(e){
    this.setState({
      username: e.target.value
    });
  },
  handlePass: function(e){
    this.setState({
      password: e.target.value
    });
  },
  login: function(){
    LoginActions.login({
      name: this.state.username,
      password: this.state.password
    });
  },
  githubLogin: function(){
    console.log("Inside of githubLogin in LoginView.jsx");
    LoginActions.githubLogin();
  },
  render: function() { 
    return (
      <div className="login-main">
        <Paper className="login-box" zDepth={1} rounded={true}>
          <h1>Log In</h1>
          <TextField
            hintText="Username" onChange={this.handleUser}/> <br />
          <TextField
            hintText="Password" onChange={this.handlePass} type="password"/> <br />
          <div className="button-container">
            <RaisedButton label="Log In" secondary={true} onClick={this.login}/>
            <RaisedButton label="Log In with GitHub" secondary={true} onClick={this.githubLogin} />
          </div>
          <p><a href="./signup.html">Dont have an account? Sign up here.</a></p>
        </Paper>
      </div>
    );
  }
});

module.exports = LoginView;
