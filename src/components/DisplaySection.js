import React from "react";

const Posts = ({ heading, content, date }) => {
  return (
    <div className="post-card">
      <p className="date-written">date: {date}</p>
      <p className="write-up">{content}</p>
      <p className="actions">
        <button className="edit">edit</button>
        <button className="delete">delete</button>
      </p>
    </div>
  )
}


const DisplaySection = ({ PostsData }) => {
  // const localPostsArray = JSON.parse(localStorage.getItem('posts')) || [];
  // const localPosts = localPostsArray.map(post => <Posts key = {post.id} heading = {post.heading} content = {post.content} date = {post.date} />)

  const postsComponents = PostsData.map(post => {
    return <Posts 
      key = {post.id} 
      heading = {post.heading} 
      content = {post.content} 
      date = {post.date} 
    />
  })

  return (
    <div>
      <h3 className="component-header">Hello, I'm the display section</h3>
      {postsComponents}
    </div>
  )
}

export default DisplaySection;