import React from 'react'
import "./Home.css"
import Typewriter from 'typewriter-effect';
import HeroSlider, {Slide} from 'hero-slider'
const image1 = "https://picsum.photos/id/1018/1000/600/"
const image2 = "https://picsum.photos/id/1015/1000/600/'"
const image3 = "https://picsum.photos/id/1019/1000/600/"
function Home() {
  return (
  <div className='container-fluide' id='home'> 
  <div className='container home-content'>
   <h1>
    <Typewriter
          options={{
                strings: ['Ameigr', 'Association Marocain des Eleves Ingénieurs'],
                autoStart: true,
                loop: true,
                
                    
                }}
                />
    </h1>
    <p>L’AMEIGR est un organisme à but non lucratif créé en 1998 au sein de l’Institut Agronomique et Vétérinaire Hassan II. Et depuis, l’association supporte toute initiative issue de l’esprit créatif et entrepreunant des élèves ingénieurs en Génie Rural.</p>
    <span className='view'>View Details</span>
    </div>
    <HeroSlider
      className='home'
      autoplay
      initialSlide = {1}
      onBeforeChange = {(previousSlide,nextSlide)=> console.log('onBeforeChange',previousSlide,nextSlide)}
      onChange={nextSlide=>console.log('onChange',nextSlide)}
      onAfterChange={nextSlide=>console.log('onAfterChange',nextSlide)}
      style={{
     
    
        
      }}
      settings= {{
        height :'100vh',
  
        

      }}
      controller = {{
        slidingDuration: 200,

      }}

      animations = {{
        slidingAnimation: 'wipe' 
      }}

      Autoplay = {{
        autoplayDuration : 500,
        autoplayDebounce: 250
      }}

      >
      
      <Slide 
      className = 'home'
      background={
        {
          backgroundImageSrc :image1,
          
        }
      
      }

      style = {{
        width :'100%',
        zIndex:'-1',
        
       
      }}

      
      />
      
     
     
     

      
    </HeroSlider>
  

</div>
    
  )
}

export default Home
