import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
 
function Navbar () {
 return (
   <React.Fragment>
     {/* //copied from bootstrap https://getbootstrap.com/docs/4.0/components/navbar/*/}
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
       <a className="navbar-brand" href="#">
         RAJH Frames
       </a>
       <button
        className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
       <div className="collapse navbar-collapse" id="navbarNav">
         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
           <li className="nav-item active">
             <a className="nav-link" href="#">
               Home <span className="sr-only">(current)</span>
             </a>
           </li>
           <li className="nav-item">
             <a className="nav-link" href="#">
               Men's
             </a>
           </li>
           <li className="nav-item">
             <a className="nav-link" href="#">
               Women's
             </a>
           </li>
           <li className="nav-item">
             <a className="nav-link" href="#">
               Children's
             </a>
           </li>
           <li className="nav-item">
             <a className="nav-link" href="#">
               Sunglasses
             </a>
           </li>
         </ul>
       </div>
     </nav>
   </React.Fragment>
 )

}










export default Navbar;
