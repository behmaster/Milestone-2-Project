import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

function Footer() {
  return (
    <div className="card text-center">
      <div className="card-header-dark bg-dark text-white">Featured</div>
      <div className="card-body">
        <h5 className="card-title">Rate the Product</h5>
        <p className="card-text">
          We would love to hear from you please leave your feedback by clicking
          the button below!
        </p>
        <a href="#" className="btn btn-primary">
          Rating
        </a>
      </div>
      <div className="card-footer-dark bg-dark text-white">
        Check back for new brands weekly
      </div>
    </div>
  )
}

export default Footer
