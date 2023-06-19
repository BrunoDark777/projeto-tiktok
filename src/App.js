import React, { useEffect, useState } from "react";
import "./App.css";
import Video from "./pages/Video";
import db from "./config/firebase";
import { collection, getDocs } from "firebase/firestore/lite";

function App() {

  let maxHeight;
  if(window.innerHeight <= 800){
    maxHeight = window.innerHeight
  }


  const [videos, setVideos] = useState([]);

  async function getVideos() {
    const videosCollection = collection(db, "videos");
    const videosSnapshot = await getDocs(videosCollection);
    const videosList = videosSnapshot.docs.map((doc) => doc.data());
    setVideos(videosList);
  }

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="App" style={{ maxHeight: maxHeight + "px" }}>
      <div className="app__videos">
        {videos.map((itens) => {
          return (
            <Video
              likes={itens.likes}
              messages={itens.messages}
              shares={itens.shares}
              name={itens.name}
              description={itens.description}
              music={itens.music}
              url={itens.url}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
