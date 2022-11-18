import React,{useState,useEffect} from 'react'
import './career.css'
import './DataInfo'
import DataInfo from './DataInfo';
import Pagination  from '../Pagination/Pagination';

function Career() {
    const url='https://jsonplaceholder.typicode.com/posts'

    const [data,setData] = useState([]);

    //for pagination
    const PER_PAGE = 7;
    const[currentPage,setCurrentPage]= useState(1);
    const handlePageClick = ({selected:selectPage})=>{
        setCurrentPage(selectPage)
    }

    const offset = currentPage * PER_PAGE
    const currentPageData = data.slice(offset,offset+PER_PAGE)

    const pageCount = Math.ceil(data.length/PER_PAGE)




    const loadPostData =()=>{
        fetch(url,{
            method:'GET'
        } ).then(res=>res.json())
        .then((result)=>{

            if(result){
                setData(result);
                console.log(result)
            }

        }).catch((err)=>{

            console.log(err)
        })
    };
    useEffect(()=>{
        loadPostData();
    },[])

  return (
    <div className='container career' id='career'>
        <div className='service-title'>
            <h5>Career</h5>
            <span className='line'></span>
        </div>
        <div className='row'>
            {data && currentPageData.map((item,index)=>(

            
                <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12'>
                    <DataInfo {...item}/>
                    {/* <DataInfo title={item.title} body={item.body}/> */}
                </div>
            ))}
        </div>

        
      
    </div>
  )
}

export default Career
