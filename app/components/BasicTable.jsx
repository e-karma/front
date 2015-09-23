import React from 'react';
import Colors from 'material-ui/lib/styles/colors';
import Avatar from 'material-ui/lib/avatar';
import FlatButton from 'material-ui/lib/flat-button';
import Tables from 'material-ui/lib/table/index';

export default React.createClass({

// define how the component will be rendered
  render() {
    return (
      <Tables.Table>
        <Tables.TableHeader>
          <Tables.TableRow>
            <Tables.TableHeaderColumn tooltip='The ID'>Company</Tables.TableHeaderColumn>
            <Tables.TableHeaderColumn tooltip='The Name'>City</Tables.TableHeaderColumn>
            <Tables.TableHeaderColumn tooltip='The Status'>State</Tables.TableHeaderColumn>
          </Tables.TableRow>
        </Tables.TableHeader>
        <Tables.TableBody>
        <Tables.TableRow selected={true}>
            <Tables.TableRowColumn>ABC Corp.</Tables.TableRowColumn>
            <Tables.TableRowColumn>Las Vegas</Tables.TableRowColumn>
            <Tables.TableRowColumn>NV</Tables.TableRowColumn>
          </Tables.TableRow>
          <Tables.TableRow>
            <Tables.TableRowColumn>DEF Corp.</Tables.TableRowColumn>
            <Tables.TableRowColumn>Detroit</Tables.TableRowColumn>
            <Tables.TableRowColumn>MI</Tables.TableRowColumn>
          </Tables.TableRow>
          <Tables.TableRow selected={true}>
            <Tables.TableRowColumn>GHI Corp.</Tables.TableRowColumn>
            <Tables.TableRowColumn>Los Angeles</Tables.TableRowColumn>
            <Tables.TableRowColumn>CA</Tables.TableRowColumn>
          </Tables.TableRow>
          <Tables.TableRow>
            <Tables.TableRowColumn>JKL Corp.</Tables.TableRowColumn>
            <Tables.TableRowColumn>San Francisco</Tables.TableRowColumn>
            <Tables.TableRowColumn>CA</Tables.TableRowColumn>
          </Tables.TableRow>
          <Tables.TableRow>
            <Tables.TableRowColumn>MNO Corp</Tables.TableRowColumn>
            <Tables.TableRowColumn>Denver</Tables.TableRowColumn>
            <Tables.TableRowColumn>CO</Tables.TableRowColumn>
          </Tables.TableRow>
          <Tables.TableRow>
            <Tables.TableRowColumn>XYZ Corp.</Tables.TableRowColumn>
            <Tables.TableRowColumn>Seattle</Tables.TableRowColumn>
            <Tables.TableRowColumn>Washington</Tables.TableRowColumn>
          </Tables.TableRow>
        </Tables.TableBody>
      </Tables.Table>
    );
  }

});
