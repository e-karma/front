
import React from 'react';

import Colors from 'material-ui/lib/styles/colors';
// import dropdown menu
// import Avatar from 'material-ui/lib/avatar';
// import FlatButton from 'material-ui/lib/flat-button';
// import toolbars
import DatePickers from 'material-ui/lib/date-picker/index';
// lets setup react component
export default React.createClass({
  getInitialState() {
    return {
      controlledDate: React.PropTypes.bool,
      autoOk: React.PropTypes.bool,
      minDate: React.PropTypes.minDate,
      maxDate: React.PropTypes.maxDate,
      showYearSelector: React.PropTypes.bool
    };
  },

  //
  //
  // handleDate(e) {
  //   this.setState({
  //     controlledDate: e.target.value
  //   })
  // },
// define how the component will be rendered
  render() {
    return (
      <div className="all-inputs">

          <DatePickers.DatePicker hintText="Portrait Dialog" />

          <DatePickers.DatePicker
            hintText="Landscape Dialog"
            mode="landscape"/>

          <DatePickers.DatePicker
            hintText="Controlled Date Input"
            value={this.state.controlledDate} />

          <DatePickers.DatePicker
            hintText="Ranged Date Picker"
            autoOk={this.state.autoOk}
            minDate={this.state.minDate}
            maxDate={this.state.maxDate}
            showYearSelector={this.state.showYearSelector} />

      </div>
    );
  }

});
