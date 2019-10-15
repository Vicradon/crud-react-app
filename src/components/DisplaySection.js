import  React  from "react";
import Posts from "./writtenPosts";

const DisplaySection = ({PostsDataProp}) => {
  // const localPostsArray = JSON.parse(localStorage.getItem('posts')) || [];
  // const localPosts = localPostsArray.map(post => <Posts key = {post.id} heading = {post.heading} content = {post.content} date = {post.date} />)

  const postsComponents = PostsDataProp.map(post => <Posts key = {post.id} heading = {post.heading} content = {post.content} date = {post.date} />)
  return (
    <div>
      <h3 className = "component-header" >Hello, I'm the display section</h3>
      {/* {localPosts} */}
      {postsComponents}
    </div>
  )
}


export default DisplaySection;