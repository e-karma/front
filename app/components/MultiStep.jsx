import React from 'react';
import AccountFields from './AccountFields.jsx';
import WizConfirm from './WizConfirm.jsx';
import WizSuccess from './WizSuccess.jsx';
var assign = require('object-assign')

// Idealy, these form values would be saved in another
// sort of persistence, like a Store via Flux pattern
var fieldValues = {
  name     : null,
  email    : null,
  password : null,
  age      : null,
  colors   : []
}

export default React.createClass({
  getInitialState: function() {
    return {
      step : 1
    }
  },

  saveValues: function(field_value) {
    return function() {
      fieldValues = assign({}, fieldValues, field_value)
    }.bind(this)()
  },

  nextStep: function() {
    this.setState({
      step : this.state.step + 1
    })
  },

  previousStep: function() {
    this.setState({
      step : this.state.step - 1
    })
  },

  submitRegistration: function() {
    // Handle via ajax submitting the user data, upon
    // success return this.nextStop(). If it fails,
    // show the user the error but don't advance

    this.nextStep()
  },

  showStep: function() {
    switch (this.state.step) {
      case 1:
        return <AccountFields fieldValues={fieldValues}
                              nextStep={this.nextStep}
                              previousStep={this.previousStep}
                              saveValues={this.saveValues} />
      case 2:
        return <WizConfirm fieldValues={fieldValues}
                             previousStep={this.previousStep}
                             submitRegistration={this.submitRegistration} />
      case 3:
        return <WizSuccess fieldValues={fieldValues} />
    }
  },

  render: function() {
    var style = {
      width : (this.state.step / 3 * 100) + '%'
    }

    return (
      <main>
        <span className="progress-step">Step {this.state.step}</span>
        <progress className="progress" style={style}></progress>
        {this.showStep()}
      </main>
    )
  }
});
