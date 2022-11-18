import React,{useState} from "react";
import "./Navbar.css"
import {Link} from 'react-scroll';
import $ from 'jquery';

const Navbar = ()=>{
    window.addEventListener('scroll', function() {
        if (window.scrollY > 150) {
          document.querySelector('#navbar').style.opacity = 0.8;
        } else {
          document.querySelector('#navbar').style.opacity = 1;
        }
      });

      $(window).scroll(function(){
        if ($(window).scrollTop()){
            $('nav').addClass('black')
        }else {
            $('nav').removeClass('black')
        }
      })
    
    
    return(
        <nav className="navbar-main " id="navbar" >
            
            <img src="./ameigr\ blanc.png" alt="Ameigr" class="logo"/>
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
                
                <li className="nav-item">
                <Link to='career' spy={true} smooth={true} offset={-100} duration={100}>
                    
                    Career
                    
                </Link>
                </li>
                <li className="nav-item">

                <Link to='video' spy={true} smooth={true} offset={-100} duration={100}>
                    
                    Video
                </Link>
                </li>
                <li className="nav-item">

                <Link to='team-mmbre' spy={true} smooth={true} offset={-100} duration={100}>
                    
                    Team
                
                </Link>
                </li>
                <li className="nav-item">
                    <Link to='Testimonial' spy={true} smooth={true} offset={-70} duration={100}>
                        Testimonial
                    </Link>
                </li> 
                
                <li className="nav-item">

                <Link to='contact' spy={true} smooth={true} offset={-110} duration={100}>
                    
                    Contact
                </Link>
  
                </li>
                <li className="nav-item">

                <Link to='subs' spy={true} smooth={true} offset={200} duration={100}>
                    
                    Subscription
                    
                </Link>
                </li>
                

                

                

                
                

                

                

                
            </ul>
        </nav>
        
    )
}

export default Navbar;