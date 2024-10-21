import PropTypes from 'prop-types'; 
import { CiBookmark } from "react-icons/ci";


const Blog = ({blog, handleBookmark, handleTime }) => {
const{id,blog_title,cover_image,profile_image,name,location,reading_time,hashtags} = blog;
    return (
        <div className='space-y-3 bg-slate-200 border-2 border-slate-400 p-5 m-5 rounded-md '>
            <img src={cover_image} alt="" />
            <div className='flex justify-between items-center  text-left mt-4'>
            <div className='flex justify-between items-center mt-4 gap-3'>
            <img className='w-10 rounded-full' src={profile_image} alt="" />
            <div>
            <p>{name}</p>
            <p>{location}</p>
            </div>
           </div>
           <p>{reading_time} min read </p>
           <button onClick={()=>handleBookmark(blog)}><CiBookmark /></button>
            </div>
         <h3 className="text-3xl font-bold text-left">{blog_title}</h3>
            <p className='text-left'>{
                
                hashtags.map((hash,idx) => <span key={idx}><a href=""></a>{hash}</span>)
                }</p>
          <button onClick={() => handleTime(reading_time, id) } className='text-purple-600 font-bold underline mr-60'>Mark as Read</button>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmark:PropTypes.func,
    handleTime : PropTypes.func
}
export default Blog;