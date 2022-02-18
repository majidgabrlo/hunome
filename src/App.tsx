import React, { useState } from "react";
import Switcher from "./components/msc/switcher/Switcher";
import SongsList from "./components/song/SongsList";
import AlbumsList from "./components/album/AlbumsList";
import "./general.css";
function App() {
  const [showSongs, setShowSongs] = useState(true);
  return (
    <>
      <div className="flex items-center center gap-x-3 mb-2">
        <div>Albums</div>
        <Switcher
          checked={showSongs}
          onChange={() => setShowSongs(!showSongs)}
        />
        <div>Singles</div>
      </div>
      {showSongs ? <SongsList /> : <AlbumsList />}
    </>
  );
}

export default App;
