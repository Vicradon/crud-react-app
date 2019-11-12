import React, { useState } from "react";

function InputBoxes({ prevID, addPost }) {

  const [heading, setHeading] = useState('');
  const [content, setContent] = useState('');
  const [post, setPost] = useState({
    heading: '',
    content: '',
    date: `${new Date().toDateString()}`,
    id: prevID + 1
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    
    name === 'heading' ?
      setHeading(value) :
      setContent(value);
      
    setPost({
      heading: heading,
      content: content,
      date: `${new Date().toDateString()}`,
      id: prevID + 1
    })
  }

  const clearForm = () => {
    setHeading('');
    setContent('');
  }

  const submitPost = () => {
    if (heading && content) {
      addPost(post);
      clearForm();
    }
  }

  return (
    <div className="InputBoxes">
      <h3 className="component-header">Hello, you'd have to type stuff</h3>
      <input
        name="heading"
        id="typed-heading"
        placeholder="type your heading here"
        type="text"
        value={heading}
        onChange={handleChange}
      />
      <textarea
        name="content"
        id="typed-content"
        className="textarea"
        placeholder="type your content here"
        value={content}
        onChange={handleChange}
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
export default InputBoxes
