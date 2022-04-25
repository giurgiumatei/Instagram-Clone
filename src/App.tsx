import { useState, useEffect } from "react";
import "./App.css";
import Post from "./Post";
import { db } from "./Firebase/firebase";
import { getPosts } from "./Firebase/Queries/Posts/GetPosts";
import { DocumentData } from "firebase/firestore/lite";
import { Button, Modal } from "@mui/material";
import { makeStyles } from '@mui/styles';

function getModalStyle() {
  const top = 50;
  const left = 50;
  return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
  };
}
const useStyles = makeStyles( (theme : any) => ({
  modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
  },
  paper: {
      position: 'absolute',
      width: 450,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
  },
}));

const signUp = (event: any) => {

}

function App() {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [posts, setPosts] = useState<DocumentData[]>([]);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    async function fetchPosts() {
      let response = await getPosts(db);
      setPosts(response);
    }

    fetchPosts();
  }, [posts]);

  return (
    <div className="App">
      <Modal open={open} onClose={() => setOpen(false)}>
        <div style={modalStyle} className={classes.paper}>
          <h2>I am a modal</h2>
        </div>
      </Modal>

      <div className="app__header">
        <img
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="Instagram"
        />
      </div>

      <Button onClick={() => setOpen(true)}>
        Sign Up
      </Button>

      {posts.map((post) => {
        return (
          <Post
            {...console.log(post)}
            key={post.id}
            username={post.data.username}
            caption={post.data.caption}
            imageUrl={post.data.imageUrl}
          />
        );
      })}
    </div>
  );
}

export default App;
