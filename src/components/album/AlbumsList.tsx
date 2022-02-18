import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "../msc/spinner/Spinner";
import AlbumCard from "../msc/card/Card";

function AlbumsList() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [albums, setAlbums] = useState([]);
  const [filterText, setFilterText] = useState("");

  useEffect(() => {
    getAlbumsList();
  }, []);

  const getAlbumsList = async () => {
    try {
      setError("");
      setIsLoading(true);
      const data = await axios.get(
        "https://itunes.apple.com/us/rss/topalbums/limit=100/json"
      );
      setAlbums(data.data.feed.entry);
      setIsLoading(false);
    } catch (error: any) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  useEffect(() => {
    if (albums.length > 30) {
      setAlbums(albums.splice(0, 30));
    }
  }, [albums]);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return (
      <div className="m1rem">
        <div data-testid="error-id" style={{ color: "red", fontSize: "1.4rem" }} className="font-bold">
          {error}
        </div>
        <div
          style={{ color: "blue", cursor: "pointer" }}
          onClick={getAlbumsList}
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
      />{" "}
      ّ
      <div className="grid gap-3">
        {albums
          .filter((item: any) =>
            item["im:name"]["label"]
              .toLowerCase()
              .includes(filterText.toLowerCase())
          )
          .map((album) => (
            <AlbumCard
              key={`${album["im:name"]["label"]}${album["im:image"][2]["label"]}`}
              title={album["im:name"]["label"]}
              image={album["im:image"][2]["label"]}
              artist={album["im:artist"]["label"]}
              price={album["im:price"]["label"]}
            />
          ))}
      </div>
    </>
  );
}

export default AlbumsList;
