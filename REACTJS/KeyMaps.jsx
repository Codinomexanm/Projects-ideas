import React, { Component } from "react";

class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: "Hello World 1",
        content: "This is a post 1",
      },
      {
        id: 2,
        title: "Hello World 2",
        content: "This is a post 2",
      },
      {
        id: 3,
        title: "Hello World 3",
        content: "This is a post 3",
      },
    ],
  };

  render() {
    const { posts } = this.state;
    return (
      <div>
        {posts.map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
