// import React from 'react'

// import { NavLink } from 'react-router-dom'
// function hand(url) {
//   const newtab = window.open(url, "_blank")
//   if (newtab) {
//     window.open("about:blank", "_self");
//     window.close();
//   }
// }

// export default function Navbar() {
//   return (
//     <>
//       <div className="navbar navbar-expand-lg bg-primary">
//         <ul className="navbar-nav mb-2 me-auto mb-lg-0">
//           <li className="nav-item">
//             <NavLink className="nav-link text-light" to="">Home</NavLink>
//             <NavLink className="nav-link text-light" to="/bootStrap" onClick={(e) => {
//               e.preventDefault(); hand("/bootstrap");
//             }}>About</NavLink>
//             <NavLink className="nav-link text-light" to="/Contact">Contact</NavLink>
//             <NavLink className="nav-link text-light" to="/Profile">Profile</NavLink>
//             <NavLink className="nav-link text-light" to="/materialUIExample">Shopping</NavLink>
//             {/* <NavLink className="nav-link text-light" to="/About">About1</NavLink> */}
//           </li>
//         </ul>
//       </div>
//     </>
//   )
// }
import React from 'react'
import { NavLink} from 'react-router-dom'
export default function Navbar() {
  // const location=useLocation()
  // if(location.pathname==="/bootstrap"){
  //   return null
  // }
  return (
    <>
      <div className="navbar navbar-expand-lg bg-primary">
        <ul className="navbar-nav mb-2 me-auto mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link text-light" to="">Home</NavLink></li>
            {/* <li className="nav-item">
            <NavLink className="nav-link text-light" to="/bootStrap">About</NavLink></li> */}
             <li className="nav-item">
             <NavLink className="nav-link text-light" to="/about">About</NavLink></li>
            <li className="nav-item">
            <NavLink className="nav-link text-light" to="/contact?name=Adil khan&salary=15600&dsg=Developer">Contact</NavLink></li>
            <li className="nav-item">
            <NavLink className="nav-link text-light" to="/profile/Adil/15200/Web Developer">Profile</NavLink></li>

              {/* <li className="nav-item">
          <NavLink className="nav-link text-light" to="/materialUIExample">Shopping</NavLink></li>*/}
            {/* <NavLink className="nav-link text-light" to="/About">About1</NavLink> */}
        
        </ul>
      </div>
    </>
  )
}
