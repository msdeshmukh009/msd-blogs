import { useState } from "react";
import { useHistory } from "react-router";
const Create = () => {
    const [title,setTitle] = useState("");
    const [body,setBody] = useState("");
    const [author,setAuthor] = useState("");
    const [isPending,setIsPending] = useState(false);
    const history = useHistory();
    const handleSubmit = (e) =>{
        setIsPending(true);
        e.preventDefault();
        const blog = { title, body, author}
        fetch("http://localhost:8000/blogs",{
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify(blog)
        }).then(()=>{
            setIsPending(false)
            console.log("New blog added")
        });
            history.push("/")
    }
    return ( 
       <div className="create">
           <h2>Add new blog</h2>
           <form onSubmit={handleSubmit}>
               <label>Blog title: </label>
               <input 
               value={title}
               onChange={(e)=>setTitle(e.target.value)}
               type="text"
               required />
               <label>Blog body:</label>
               <textarea 
               value={body}
               onChange={(e)=>setBody(e.target.value)}
               required ></textarea>
               <label>Blog author:</label>
               <input 
               value={author}
               onChange={(e)=>setAuthor(e.target.value)}
               required
               type="text" />
               {!isPending && <button>Add blog</button>}
               {isPending && <button>Adding blog...</button>}
           </form>
       </div>
     );
}
 
export default Create;