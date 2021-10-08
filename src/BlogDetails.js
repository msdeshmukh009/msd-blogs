import { useParams } from "react-router";

const BlogDetails = () => {
    const {id} = useParams();
    return ( 
        <div className="blog-details">
            <h1>Blog detail { id }</h1>
        </div>
     );
}
 
export default BlogDetails;