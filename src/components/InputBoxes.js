import React from "react";

function submitPost() {
  idTracker = 0;
  const $ = n => document.querySelector(n)
  let heading = $('#typed-heading').value.trim();
  let content = $('#typed-content').value.trim();
  if (heading && content) {
    PostsData.push({
      "heading": `${heading}`,
      "content": `${content}`,
      "date": `${new Date().toDateString()}`,
      "id": ++idTracker
    })
    // localStorage.setItem('posts', JSON.stringify(PostsData))
    setState({ posts: PostsData })
  }
  $('#typed-heading').value = '';
  $('#typed-content').value = '';
}

function InputBoxes({heading, content, handleChange}) {
  return (
    <div className="InputBoxes">
      <h3 className="component-header">Hello, you'd have to type stuff</h3>
      <input 
        id = "typed-heading" 
        placeholder="type your heading here" 
        type="text" 
        value = {heading} 
        onChange = {handleChange}
      />
      <textarea 
        id="typed-content" 
        className="textarea" 
        placeholder="type your content here" 
        value = {content} 
        onChange = {handleChange}
      />
      <button 
        id="submit-button" 
        className="submit-post" 
        type="submit" 
        onClick={() => submitPost()}
      >Add Post</button>
    </div>
  )
}
export default InputBoxes;