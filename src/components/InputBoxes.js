import React from "react";

function InputBoxes({ heading, content, handleChange, submitPost }) {
  return (
    <div className="input-boxes">
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
