import React from "react";

const Posts = props => {
  const { heading, content, date } = props;
  return (
    <div className="post-card">
      <div style = {{display:"flex", width:"100%", justifyContent:"center"}}><h3 className="article-heading" >{heading}</h3><span id = "delete-post" style = {{position:"absolute", left:"95%", color:"red", cursor:"pointer"}}>&times;</span></div>
      <p className="date-written">date: {date}</p>
      <p className="write-up">{content}</p>
    </div>
  )
}
export default Posts;
