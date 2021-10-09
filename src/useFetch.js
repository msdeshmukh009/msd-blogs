import { useState,useEffect } from "react";
const useFectch = (url) =>{
    const [data, setData] = useState(null);
    const [isPending,setIsPending] = useState(true);
    const [error,setError] = useState(null);
    useEffect(() => {
        // npx json-server --watch data/db.json --port 8000
        const abortCont = new AbortController();
        setTimeout(()=>{
          fetch(url, { signal: abortCont.signal })
          .then(res => {
            // console.log(res)
            if(!res.ok){
              throw Error("Colud not fetch this endpoint")
            }
            return res.json();
          })
          .then(data => {
            setData(data);
            setIsPending(false)
            setError(null)
          })
          .catch(err=>{
              if(err.name==="AbortError"){
                  console.log('Fetch aborted')
              }else{
                setIsPending(false)
                setError(err.message)
                // console.log(err.message)
              }
           
          })
        },1000)

        return () => abortCont.abort();
      }, [url])
      return{data,isPending,error}
}
export default useFectch;