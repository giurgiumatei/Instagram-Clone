import { useState, useEffect } from "react";
import "./App.css";
import Post from "./Post";
import { db } from "./Firebase/firebase";
import { getPosts } from "./Firebase/Queries/Posts/GetPosts";
import { DocumentData } from "firebase/firestore/lite";

function App() {
  const [posts, setPosts] = useState<DocumentData[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      let response = await getPosts(db);
      setPosts(response);
    }

    fetchPosts();
  }, [posts]);

  return (
    <div className="App">
      <div className="app__header">
        <img
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="Instagram"
        />
      </div>
      {posts.map(({id, post}) => (
        <Post
          key={id}
          username={post.data.username}
          caption={post.data.caption}
          imageUrl={post.data.imageUrl}
        />
      ))}
    </div>
  );
}

export default App;
