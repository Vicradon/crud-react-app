import React from 'react';
import './App.css';
import InputBoxes from './components/InputBoxes'
import DisplaySection from './components/DisplaySection'
import Header from './components/Header'
import Footer from "./components/Footer";

class App extends React.Component {
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
    this.setState({posts:[...this.state.posts, post]})
  }
  render() {
    return (
      <div className="App">
        <Header />
        <InputBoxes 
          prevID = {this.state.posts[this.state.posts.length - 1].id} 
          addPost = {this.addPost} 
        />
        <DisplaySection PostsData = {this.state.posts} />
        <Footer />
      </div>
    );
  }
}


export default App;
