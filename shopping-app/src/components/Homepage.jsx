import React from 'react'
import "./Homepage.scss";

import Directorymenu from './Directorymenu';
import ErrorHandling from './ErrorHandling';
function Homepage() {
  return (
    <div className="homepage">
      <ErrorHandling>
        <Directorymenu />
      </ErrorHandling>
    </div>
  )
}

export default Homepage
