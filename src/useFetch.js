import { useState,useEffect } from "react";
const useFectch = (url) =>{
    const [data, setData] = useState(null);
    const [isPending,setIsPending] = useState(true);
    const [error,setError] = useState(null);
    useEffect(() => {
        setTimeout(()=>{
          fetch(url)
          .then(res => {
            console.log(res)
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
            setIsPending(false)
            setError(err.message)
            console.log(err.message)
          })
        },1000)
      }, [url])
      return{data,isPending,error}
}
export default useFectch;