import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";
import PropTypes from 'prop-types'

const Blogs = ({handleBookmark, handleTime }) => {
    const[blogs, setBlogs] = useState([]);
    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="md:w-1/3">
          <h3 className="text-5xl">Blogs {blogs.length}</h3>  
          {
            blogs.map(blog => <Blog key={blog.id} blog={blog} handleBookmark={handleBookmark} handleTime ={handleTime }></Blog>)
          }
        </div>
    );
};
Blogs.propTypes ={
    handleBookmark: PropTypes.func,
    handleTime : PropTypes.func
}
export default Blogs;