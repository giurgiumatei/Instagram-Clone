import React, { useState } from 'react';
import './App.css';
import Post from './Post';

function App() {
  const [posts, setPosts] = useState([
    {
      username: 'suntmatei',
      caption: 'Acesta este Radu Lupsa',
      imageUrl: 'http://www.cs.ubbcluj.ro/~rlupsa/rlupsa.jpg'
    },
    {
      username: 'suntmatei',
      caption: 'Acesta este Radu Lupsa',
      imageUrl: 'http://www.cs.ubbcluj.ro/~rlupsa/rlupsa.jpg'
    },
  ]);

  return (
    <div className="App">
        <div className="app__header">
            <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                 alt="Instagram"
            />
        </div>
      {
        posts.map(post => (
          <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>
        ))
      }
    </div>
  );
}

export default App;
