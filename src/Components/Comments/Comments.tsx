"use client"
import { useEffect, useState } from "react"
// import { json } from "stream/consumers";


export const Comments = () => {
  const [comment,setcomment] = useState("");
  const [comments, setcomments] = useState<string[]>([]);

  useEffect(()=>{

    const commentSave = localStorage.getItem('comments')
    if(commentSave){
      setcomments(JSON.parse(comment))
    }
  },[comment]);


  const addComment =(e: React.FormEvent)=>{
    e.preventDefault()
    
    if(comment.trim() !== ("")){

      const updateComments = [...comments,comment];
      setcomments(updateComments)
      setcomment("");

      sessionStorage.setItem(comment,JSON.stringify(updateComments))
    }
  }



  return (
    <div>
      <h1 className="3xl font-bold my-2 text-purple-500">
      CommentsBox
      </h1>
      <input type="text" value={comment}
       onChange={(e)=>setcomment(e.target.value)}
       placeholder="Add your comments"
       className="border border-purple-500 p-2 rounded-md w-80"
      
      />

      <br />
      <button className="bg-purple-400 w-36 mt-3 px-4 py-2 rounded-md "
      onClick={addComment}>
        Add Button
      </button>

      <div className="my-2">
        <h2  > All Commen </h2>
        {comments.length === 0 ? (<p>Please Enter your Comment</p>):
        <ul>
        {comments.map((data,index)=>( 

          <li key={index}>{data}</li>
          

        )
        )}
        </ul>
        }
      </div>
      
    </div>
  )
}

