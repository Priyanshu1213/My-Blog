import React , {  useState }from 'react'
import './post.css'
import { useGlobalContext } from '../../context';
import { useNavigate} from 'react-router-dom'

export default function Post() {
  

const {posts} = useGlobalContext();
console.log(posts)

const Navigate= new useNavigate()

let arr=[];

const Toggledetails = (item)=>()=>{
  console.log(item);
  Navigate("/postdetails" ,{state:{item}})
  console.log(item);
};



const itemsPerPage = 6;
const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = posts.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(posts.length / itemsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
console.log(posts)

      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  


  return (
    
    <div className='post'>
        <div className='post-1'>
            {currentItems.map((index) => {
            arr=[index.img,index.title,index.content]
            return(
            <div className='mapping'  onClick={Toggledetails(arr)} key={index.id} >

                <div className='map-img'><img src={index.img} alt={index.title} /></div>
                <h2>{index.title}</h2>
                <p>{index.content}</p>
            </div>
            
            );
          })}
        </div>
        <div className='btu'>
        <button onClick={prevPage} disabled={currentPage === 0}>
          Previous
        </button>
        <li >{currentPage} of {totalPages}</li>
        <button onClick={nextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
    
  )
}
