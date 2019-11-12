import React from "react"
import InputBoxes from './InputBoxes'
import DisplaySection from './DisplaySection'


class Main extends React.Component {
  state = {
    heading: '',
    content: '',
    currentID: 2,
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
  handleChange = (event) => {
    const { name, value } = event.target;

    name === 'heading' ?
      this.setState({ heading: value }) :
      this.setState({ content: value });
  }
  submitPost = () => {
    if (this.state.heading && this.state.content) {
      const newPost = {
        heading: this.state.heading,
        content: this.state.content,
        date: `${new Date().toDateString()}`,
        id: this.state.currentID + 1
      }
      this.addPost(newPost);
      this.setState({ heading: '', content: '' });;
    }
  }
  addPost = (post) => {
    this.setState({ 
      posts: [...this.state.posts, post], 
      currentID:+this.state.currentID+1 
    })
  }
  handleEdit = (event) => {
    const id = +event.target.parentNode.parentNode.dataset.id;
    const oldPost = this.state.posts.filter(post => post.id === id);
    const {heading, content} = oldPost[0];
    this.setState({
      heading:heading,
      content:content
    });
    const newPosts = this.state.posts.filter(post => post.id !== oldPost[0].id)
    this.setState({posts: newPosts})
  }
  handleDelete = (event) => {
    const id = +event.target.parentNode.parentNode.dataset.id;
    const oldPost = this.state.posts.filter(post => post.id === id);
    const newPosts = this.state.posts.filter(post => post.id !== oldPost[0].id)
    this.setState({posts: newPosts})
  }
  render() {
    return (
      <div className="main">
        <InputBoxes
          heading={this.state.heading}
          content={this.state.content}
          handleChange={this.handleChange}
          submitPost={this.submitPost}
        />
        <DisplaySection
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
          PostsData={this.state.posts}
        />
      </div>
    );
  }
}


export default Main;