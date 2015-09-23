import React from 'react';
import ReactCSS from 'reactcss';
import mui from 'material-ui';
import FlatButton from 'material-ui/lib/flat-button';

let ThemeManager = new mui.Styles.ThemeManager();

// extends from ReactCSS.Component if you want component with styles
class BasicButton extends ReactCSS.Component {

  constructor(props) {
    super(props);
    this.changeTheme = this.changeTheme.bind(this);
    this.state = {
      darkThemeActive: false
    };
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  changeTheme() {
    this.setState({
      darkThemeActive: true
    });
  }

  // Define classes for the component here
  classes() {
    return {
      // 'default' is theme definition
      'default': {
        // define component by name
        Button: {
          color: 'green'
        },
        // define html element by name
        title: {
          color: 'red'
        }
      },
      // define another custom theme
      'dark-theme': {
        Button: {
          backgroundColor: 'black'
        },
        title: {
          color: 'green'
        }
      }
    }
  }

  styles() {
    return this.css({
      'dark-theme': this.state.darkThemeActive
    });
  }

  // to apply styling to html element, define 'is' property on it and pass styling variable
  // <span is="title">
  // to apply styling for custom Component, define 'is' property on it and pass styling variable
  // <Component is="Button"/>
  // to apply styling for Material-UI component, define 'style' property on it and pass styling variable
  // <FlatButton label="Hello" style={this.styles().Button}/> ||<<< Important to apply styles to material ui components that way, otherwise it will not work
  render() {
    return (
      <div>
        <FlatButton style={this.styles().Button} onClick={this.changeTheme}/>
      </div>
    )
  }
}

// We moved childContextTypes out of class definition
BasicButton.childContextTypes = {
  muiTheme: React.PropTypes.object
}

// Export component for others to import
export default BasicButton;
