import React from 'react';

const DogSelect = props => (
  <label>
    pick a flavor of dog:
    <select name="breeds" id="selection" onChange={props.selectOnChange}>
      <option value="none" disabled></option>
      <option value="husky/">husky</option>
      <option value="chihuahua/">chihuahua</option>
      <option value="pyrenees/">pyrenees</option>
    </select>
  </label>
)

export default DogSelect;
