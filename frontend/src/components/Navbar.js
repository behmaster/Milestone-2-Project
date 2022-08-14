import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
 
function Navbar () {
 return (
   <React.Fragment>
     {/* //copied from bootstrap https://getbootstrap.com/docs/4.0/components/navbar/*/}
     <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
       <a class="navbar-brand" href="#">
         RAJH Frames
       </a>
       <button
        class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
       <div class="collapse navbar-collapse" id="navbarNav">
         <ul class="navbar-nav me-auto mb-2 mb-lg-0">
           <li class="nav-item active">
             <a class="nav-link" href="#">
               Home <span class="sr-only">(current)</span>
             </a>
           </li>
           <li class="nav-item">
             <a class="nav-link" href="#">
               Men's
             </a>
           </li>
           <li class="nav-item">
             <a class="nav-link" href="#">
               Women's
             </a>
           </li>
           <li class="nav-item">
             <a class="nav-link" href="#">
               Children's
             </a>
           </li>
           <li class="nav-item">
             <a class="nav-link" href="#">
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
