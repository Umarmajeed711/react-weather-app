import { useState } from "react";
import { useEffect } from "react";

const DummyApi = () => {

  const [posts , setPosts] = useState([])

  useEffect(() => {
    // console.log("useEffect")
    fetch('https://dummyjson.com/posts')
    .then(res => res.json())
    .then(res => {setPosts(res.posts)})
    
  },[])

 

  return(
    <div style={{display: "flex", rowGap: 10, flexDirection: "column",alignItems: "center"}}>
      {posts.map((data , i) => {
        return(
          <div key={data?.id} style={{width: 400, borderRadius: 8, border: "1px solid #EEE", padding: 12}}>
            <h6>{data.title}</h6>
            <p>{data.body}</p>
          </div>
        )
      })}
    </div>
  )
}

export default DummyApi;