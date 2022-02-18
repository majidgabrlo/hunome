import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "../msc/spinner/Spinner";
import SongCard from "../msc/card/Card";

function SongsList() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [songs, setSongs] = useState([]);
  const [filterText, setFilterText] = useState("");

  useEffect(() => {
    getSongsList();
  }, []);

  const getSongsList = async () => {
    try {
      setError("");
      setIsLoading(true);
      const data = await axios.get(
        "https://itunes.apple.com/us/rss/topsongs/limit=100/json"
      );
      setSongs(data.data.feed.entry);
      setIsLoading(false);
    } catch (error: any) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  useEffect(() => {
    if (songs.length > 30) {
      setSongs(songs.splice(0, 30));
    }
  }, [songs]);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return (
      <div className="m1rem">
        <div style={{ color: "red", fontSize: "1.4rem" }} className="font-bold">
          {error}
        </div>
        <div
          style={{ color: "blue", cursor: "pointer" }}
          onClick={getSongsList}
        >
          Retry
        </div>
      </div>
    );
  }

  return (
    <>
      <input
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
        className="mb-2 flex"
        placeholder="Search..."
        style={{ margin: "8px auto" }}
      />
      <div className="grid gap-3">
        {songs
          .filter((item: any) =>
            item["im:name"]["label"]
              .toLowerCase()
              .includes(filterText.toLowerCase())
          )
          .map((song) => (
            <SongCard
              key={`${song["im:name"]["label"]}${song["im:image"][2]["label"]}`}
              title={song["im:name"]["label"]}
              image={song["im:image"][2]["label"]}
              artist={song["im:artist"]["label"]}
              price={song["im:price"]["label"]}
            />
          ))}
      </div>
    </>
  );
}

export default SongsList;
