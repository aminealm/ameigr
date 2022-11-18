import React,{useState} from 'react'
import {FcCollapse,FcExpand } from "react-icons/fc";

function DataInfo({title,body}) {

  const [show,setShow]=useState(false)


  return (
    <div className={show ? 'post-card-open' : 'post-card'} onClick={()=>setShow(!show)}>
        <div className='collapse-option'>
            <h6>{title}</h6>
            <p>{show ? <FcCollapse size={20}/> : <FcExpand size={20}/> }</p>

        </div>

        <div className='desctiption'>{show ? <p>{body}</p> : null}</div>

        
      
    </div>
  )
}

export default DataInfo
