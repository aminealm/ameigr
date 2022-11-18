import React from 'react'
import './about.css' 
import img from "../../img/img.jpg"
import { FcMultipleCameras,FcInvite,FcDiploma1 } from "react-icons/fc";


function About() {
  return (
    <div className='container about-sect ' id='about'>
      <div className='row'>
        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className='about-img'>
                <img src={img} height='400px' width={'400px'}></img>

            </div>
        </div>
        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className='about-dtl'>
                <div className='about-title'>
                    <h5>About</h5>
                </div>
                <span className='line'></span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisq</p>

                <div className='card-design'>
                  <div className='about-list-item'>
                    <div className='about-icon'>
                      <p><FcMultipleCameras size={'50'}/></p>
                    </div>
                    <div><h6>Perfect day out</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,</p>
                      </div>

                  </div>

                </div>
                <div className='card-design'>
                  <div className='about-list-item'>
                    <div className='about-icon'>
                      <p><FcInvite size={'50'}/></p>
                    </div>
                    <div><h6>Perfect day out</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,</p>
                      </div>

                  </div>

                </div>
                <div className='card-design'>
                  <div className='about-list-item'>
                    <div className='about-icon'>
                      <p><FcDiploma1 size={'50'}/></p>
                    </div>
                    <div><h6>Perfect day out</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,</p>
                      </div>

                  </div>

                </div>


            </div>
        </div>
      </div>
    </div>
  )
}

export default About
