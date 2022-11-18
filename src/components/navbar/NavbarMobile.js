import React, { useState } from 'react'
import './navbarmobile.css'
import {GiHamburgerMenu} from 'react-icons/gi'
import {Link} from 'react-scroll';

function NavbarMobile() {
  const [open,setOpen] = useState(false);

  const handleNavbaropen = () => {
    setOpen(!open)
  }


  return (
    <div className='responsive-mobile-view'>
        <div className='container-fluid mobile-view-header'>
            <p><GiHamburgerMenu size={25} onClick={handleNavbaropen}/></p>
        </div>

        {open? (<div className='mobile-nav'>
        <ul>
                <li className="nav-item">
                    <Link to='home' spy={true} smooth={true} offset={-100} duration={100}>
                        Home
                    </Link>
                </li>  
                
                <li className="nav-item">
                <Link to='about' spy={true} smooth={true} offset={-100} duration={100}>
                    About
                </Link>

                </li>
                <li className="nav-item">
                    <Link to='service' spy={true} smooth={true} offset={-100} duration={100}>
                    
                        Service
                    
                    </Link>

                </li>
                

                <Link to='career' spy={true} smooth={true} offset={-100} duration={100}>
                    <li>
                    Career
                    </li>
                </Link>
                <Link to='' spy={true} smooth={true} offset={100} duration={100}>
                    <li>
                    Video
                    </li>
                </Link>
                <Link to='team-mmbre' spy={true} smooth={true} offset={-100} duration={100}>
                    <li>
                    Team
                    </li>
                </Link>
                <li className="nav-item">
                    <Link to='Testimonial' spy={true} smooth={true} offset={-70} duration={100}>
                        Testimonial
                    </Link>
                </li> 
                
                
                <Link to='' spy={true} smooth={true} offset={100} duration={100}>
                    <li>
                    Contact
                    </li>
                </Link>
                <Link to='subs' spy={true} smooth={true} offset={-70} duration={100}>
                    <li>
                    Subscription
                    </li>
                </Link>
                
            </ul>
        </div>):null }
        
    </div>
  )
}

export default NavbarMobile
