import React from 'react'

// Note Data Link Id
import { Link } from 'react-router-dom'
// Add Icon 
import { ReactComponent as AddIcon } from '../../assets/add.svg'

const AddButton = () => (

  <Link to="/notes/new" className="floating-button">
    <AddIcon />
  </Link>
);

export default AddButton;