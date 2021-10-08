import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFectch from "./useFetch";

const Home = () => {
 const {data:blogs,isPending,error} = useFectch('http://localhost:8000/blogs')


  return (
    <div className="home">
      {error && <div>{ error }</div>}
      {isPending && <div>Loading...</div>}
       {blogs && <BlogList blogs={blogs} />}
     
    </div>
  );
}
 
export default Home;