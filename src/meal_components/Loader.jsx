import React from 'react'

const Loader = () => {
  return (
    <>
  <button className="btn btn-primary" type="button" disabled="">
    <span className="spinner-grow spinner-grow-sm" aria-hidden="true" />
    <span className="visually-hidden" role="status">
      Loading...
    </span>
  </button>
  <button className="btn btn-primary" type="button" disabled="">
    <span className="spinner-grow spinner-grow-sm" aria-hidden="true" />
    <span role="status">Loading...</span>
  </button>
</>

  )
}

export default Loader
