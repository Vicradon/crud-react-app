import React from "react";
import PostsData from "./PostsData"
import DisplaySection from "./DisplaySection"

class InputBoxes extends React.Component {
  constructor() {
    super()
    this.state = {
      posts: PostsData
    }
    this.submitPost = this.submitPost.bind(this)
  }
  submitPost() {
    this.idTracker = 0;
    const $ = n => document.querySelector(n)
    let heading = $('#typed-heading').value.trim();
    let content = $('#typed-content').value.trim();
    if (heading && content) {
      PostsData.push({
        "heading": `${heading}`, "content": `${content}`,
        "date": `${new Date().toDateString()}`,
        "id": ++this.idTracker
      })
      // localStorage.setItem('posts', JSON.stringify(PostsData))
      this.setState({ posts: PostsData })
    }
    $('#typed-heading').value = '';
    $('#typed-content').value = '';
  }
  render() {
    return (
      <div>
        <div className="display-section">
          <div className="InputBoxes">
            <h3 className="component-header">Hello, you'd have to type stuff</h3>
            <input id="typed-heading" placeholder="type your heading here" type="text" />
            <textarea id="typed-content" className="textarea" placeholder="type your content here"></textarea>
            <input id="submit-button" className="submit-post" type="submit" onClick={this.submitPost} />
          </div>
          <DisplaySection key={this.idTracker} PostsDataProp={PostsData} />
        </div>
      </div>
    )
  }

}
export default InputBoxes;