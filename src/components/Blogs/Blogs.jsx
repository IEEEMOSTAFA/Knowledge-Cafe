import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handleAddToBookmark}) => {
   
            const [blogs, setBlogs] = useState([]);
            useEffect(() =>{
                fetch('blogs.json')
                .then(res => res.json())
                .then(data => setBlogs(data))
            },[])
    
    return (
        <div className=" md:w-2/3 sm:w-1/3">
            <h1 className="text-4xl">Blogs: {blogs.length}</h1>
            {
                blogs.map(blog => <Blog
                     key={blog.id} 
                     blog={blog}
                     handleAddToBookmark ={handleAddToBookmark}
                     ></Blog>)
            }
        </div>
    );
};

export default Blogs;