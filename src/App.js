import "./App.css";
import Video from "./pages/Video"

function App() {
  return (
    <div className="App">
      <div className="app__videos">
        <Video
        likes={100} 
        messages={200}
        shares={300}
        name="@BrunoCésar"
        description="Brecker o goleiro"
        music="Musica epica"
        url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4?t=2023-05-22T19%3A37%3A45.885Z"

        />
        <Video 
        likes={1500} 
        messages={2346}
        shares={370}
        name="@paulosantos2058"
        description="Bird olhando para a camera"
        music="Clap your hands"
        url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4?t=2023-05-22T19%3A40%3A47.052Z"

        />
        <Video
        likes={10} 
        messages={56}
        shares={25}
        name="@BrunoCésar"
        description="Brecker o goleiro"
        music="musica epica"

         />
        <Video
        likes={999} 
        messages={150}
        shares={555}
        name="@BrunoCésar"
        description="Brecker o goleiro"
        music="musica epica"

         />
      </div>
    </div>
  );
}

export default App;
