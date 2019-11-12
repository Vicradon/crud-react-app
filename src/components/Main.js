import React from "react"
import InputBoxes from './InputBoxes'
import DisplaySection from './DisplaySection'


class Main extends React.Component {
  state = {
    posts: [
      {
        heading: "My first reasonable React app",
        content: "Ok, so this react app is the first reasonable one I've ever built. I used both class and functional components.",
        date: "Sun Oct 13 2019",
        id: 1
      },
      {
        heading: "Stuff",
        content: "More stuff",
        date: "Sun Oct 13 2019",
        id: 2
      }
    ]
  }
  
  addPost = (post) => {
    this.setState({ posts: [...this.state.posts, post] })
  }
  handleEdit = (event) => {
    const id = +event.target.parentNode.parentNode.dataset.id;
    const card = this.state.posts.filter(card => card.id === id);
  }
  handleDelete = (event) => {
    console.log(event.target.parentNode.parentNode)
  }
  render() {
    return (
      <div className="main">
        <InputBoxes
          prevID={this.state.posts[this.state.posts.length - 1].id}
          addPost={this.addPost}
        />
        <DisplaySection 
          handleEdit = {this.handleEdit} 
          handleDelete = {this.handleDelete} 
          PostsData={this.state.posts} 
        />
      </div>
    );
  }
}


export default Main;