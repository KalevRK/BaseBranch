var React = require('react');
var ResourceStore = require('../stores/ResourceStore.jsx');
var mui = require('material-ui');
var TextField = mui.TextField;
var Checkbox = mui.Checkbox;
var RaisedButton = mui.RaisedButton;


var NewResourceForm = React.createClass({
  getInitialState: function() {
    return {resourceName: '', resourceAuthor: '', resourceRating: '0', resourceType: '', resourceURL: '', resourceDesc: ''}
  },

  handleChangeName: function(event) {
    this.setState({resourceName: event.target.value});
  },

  handleChangeAuthor: function(event) {
    this.setState({resourceAuthor: event.target.value});
  },

  handleChangeType: function(event) {
    if (this.state.resourceType === '') {
      this.setState({resourceType: event.target.name});
    } else {
      this.setState({resourceType: this.state.resourceType + ", " + event.target.name});
    }
  },

  handleChangeURL: function(event) {
    this.setState({resourceURL: event.target.value });
  },

  handleChangeDesc: function(event) {
    this.setState({resourceDesc: event.target.value});
  },

  handleSave: function() {
    // this call's NewResourceView's onSave method
    this.props.onSave(this.state.resourceName, this.state.resourceAuthor, this.state.resourceType, this.state.resourceURL, this.state.resourceDesc, this.props.id);
    if (!this.props.id) {
      // this is then called since there is no id
      this.refs.newResourceForm.getDOMNode().value = '';
      this.setState({resourceName: '', resourceAuthor: '', resourceType: '', resourceURL: '', resourceDesc: ''});
    }
  },

  componentWillReceiveProps: function(nextProps) {
    this.setState({
      resourceName: nextProps.resourceName,
      resourceAuthor: nextProps.resourceAuthor,
      resourceRating: nextProps.resourceRating,
      resourceType: nextProps.resourceType,
      resourceURL: nextProps.resourceURL,
      resourceDesc: nextProps.resourceDesc
    });

    if(!nextProps.id) {
      this.refs.newResourceForm.getDOMNode().focus();
    }
  },

  render: function() {
    return (
      <div>
        <div className="addResource" ref="newResourceForm">
          <div className="full">
            <div className="left">
            Name:
            <TextField
              value={this.state.resourceName} 
              onChange={this.handleChangeName} />
            URL:
            <TextField
              value={this.state.resourceURL} 
              onChange={this.handleChangeURL} />
            Author:
            <TextField
              value={this.state.resourceAuthor} 
              onChange={this.handleChangeAuthor} />
            Description:
            <TextField
              multiLine={true} 
              value={this.state.resourceDesc} 
            onChange={this.handleChangeDesc} />
            </div>
            <div className ="right">
            <div className="resourceType">
              Type:
              <Checkbox 
                name="Documentation"
                value={this.state.resourceType}
                onCheck={this.handleChangeType}
                label="Documentation"/>
              <Checkbox 
                name="Textbook"
                value={this.state.resourceType}
                onCheck={this.handleChangeType}
                label="Textbook"/>
              <Checkbox 
                name="Tutorial"
                value={this.state.resourceType}
                onCheck={this.handleChangeType}
                label="Tutorial"/>
              <Checkbox 
                name="Other Text (i.e. Blog)"
                value={this.state.resourceType}
                onCheck={this.handleChangeType}
                label="Other Text (i.e. Blog)"/>
              <Checkbox 
                name="Video"
                value={this.state.resourceType}
                onCheck={this.handleChangeType}
                label="Video"/>
              <Checkbox 
                name="Audio (i.e. Podcast)"
                value={this.state.resourceType}
                onCheck={this.handleChangeType}
                label="Audio (i.e. Podcast)"/>
              <Checkbox 
                name="Practice Problems"
                value={this.state.resourceType}
                onCheck={this.handleChangeType}
                label="Practice Problems"/>
              <Checkbox 
                name="GitHub Repository"
                value={this.state.resourceType}
                onCheck={this.handleChangeType}
                label="GitHub Repository"/>
              <Checkbox 
                name="NPM Module"
                value={this.state.resourceType}
                onCheck={this.handleChangeType}
                label="NPM Module"/>
              <Checkbox 
                name="Other"
                value={this.state.resourceType}
                onCheck={this.handleChangeType}
                label="Other"/>
            </div>
            <input type="button" className="btn btn-success btn-lg" value="Save" onClick={this.handleSave}/>
            </div>
          </div>
        </div>
      </div>
    )
  }

});

module.exports = NewResourceForm;