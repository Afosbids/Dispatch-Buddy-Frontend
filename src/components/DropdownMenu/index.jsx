import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const countryOptions = [
  { key: 'abia', value: 'abia', text: 'Abia' },
  { key: 'Adamawa', value: 'Adamawa', text: 'Adamawa' },
  { key: 'Anambra', value: 'Anambra', text: 'Anambra' },
  { key: 'Akwa Ibom', value: 'Akwa Ibom', text: 'Akwa Ibom' },
  { key: 'Bayelsa', value: 'Bayelsa', text: 'Bayelsa' },
  { key: 'Bauchi', value: 'Bauchi', text: 'Bauchi' },
  { key: 'Benue', value: 'Benue', text: 'Benue' },
  { key: 'Borno', value: 'Borno', text: 'Borno' },
  { key: 'Cross River', value: 'Cross River', text: 'Cross River' },
  { key: 'Delta', value: 'Delta', text: 'Delta' },
  { key: 'Ebonyi', value: 'Ebonyi', text: 'Ebonyi' },
  { key: 'Edo', value: 'Edo', text: 'Edo' },
  { key: 'Ekiti', value: 'Ekiti', text: 'Ekiti' },
  { key: 'Enugu', value: 'Enugu', text: 'Enugu' },
  { key: 'Gombe', value: 'Gombe', text: 'Gombe' },
  { key: 'Imo', value: 'Imo', text: 'Imo' },
  { key: 'Jigawa', value: 'Jigawa', text: 'Jigawa' },
  { key: 'Kaduna', value: 'Kaduna', text: 'Kaduna' },
  { key: 'Kano', value: 'Kano', text: 'Kano' },
  { key: 'Katsina', value: 'Katsina', text: 'Katsina' },
  { key: 'Kebbi', value: 'Kebbi', text: 'Kebbi' },
  { key: 'Kogi', value: 'Kogi', text: 'Kogi' },
  { key: 'Kwara', value: 'Kwara', text: 'Kwara' },
  { key: 'Lagos', value: 'Lagos', text: 'Lagos' },
  { key: 'Nasarawa', value: 'Nasarawa', text: 'Nasarawa' },
  { key: 'Niger', value: 'Niger', text: 'Niger' },
  { key: 'Ogun', value: 'Ogun', text: 'Ogun' },
  { key: 'Ondo', value: 'Ondo', text: 'Ondo' },
  { key: 'Osun', value: 'Osun', text: 'Osun' },
  { key: 'Oyo', value: 'Oyo', text: 'Oyo' },
  { key: 'Plateau', value: 'Plateau', text: 'Plateau' },
  { key: 'Rivers', value: 'Rivers', text: 'Rivers' },
  { key: 'Sokoto', value: 'Sokoto', text: 'Sokoto' },
  { key: 'Taraba', value: 'Taraba', text: 'Taraba' },
  { key: 'Yobe', value: 'Yobe', text: 'Yobe' },
  { key: 'Zamfara', value: 'Zamfara', text: 'Zamfara' },
  { key: 'FCT Abuja', value: 'FCT Abuja', text: 'FCT Abuja' },

]

const DropdownMenu = () => (
  <Dropdown
    placeholder='Select City'
    fluid
    search
    selection
    options={countryOptions}
  />
)

export default DropdownMenu