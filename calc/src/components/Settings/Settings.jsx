import React from "react";
import PropTypes from "prop-types";

import classes from './Settings.module.scss';

class Settings extends React.Component {
  render() {
    return <div className={classes.wrapper}>
      <h1>Settings</h1>
      <label htmlFor="select">Switch Theme</label>
      <select onChange={ event => { this.props.themeToggle(event.target.value) } }>
        <option value={'light'}>Light theme</option>
        <option value={'color'}>Colored Theme</option>
        <option value={'dark'}>Dark Theme</option>
      </select>
    </div>
  }
}

Settings.propTypes = {
  themeToggle: PropTypes.func
}

export default Settings;