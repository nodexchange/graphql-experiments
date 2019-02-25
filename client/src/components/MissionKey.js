import React from 'react'
import PropTypes from 'prop-types'
 
const MissionKey = props => {
  return (
    <div className="my-3">
      <p>
        <span className="px-3 mr-2 bg-success">Success</span>  
      </p>      
      <p>
        <span className="px-3 mr-2 bg-danger">Fail</span>  
      </p>      
    </div>
  )
}

MissionKey.propTypes = {

}

export default MissionKey
