import { useEffect, useState } from "react";

async function fetchMemes() {
  const response = await fetch("https://api.imgflip.com/get_memes");
  const result = await response.json();
  return await result;
}

function MemePreview() {
  const [memesList, setMemesList] = useState([]);
  const [isFetched, setIsFetched] = useState(false);
  useEffect(() => {
    fetchMemes().then((object) => setMemesList(object.data.memes));
    setIsFetched(true);
    return () => setIsFetched(false);
  }, [setIsFetched]);

  const [selectedMeme, setSelectedMeme] = useState({});
  useEffect(() => {
    setSelectedMeme(memesList[5]);
  }, [memesList]);

  return (
    <div className="meme-preview">
      <div className="meme-preview__meme">
        {isFetched && selectedMeme ? (
          <img
            src={selectedMeme.url}
            alt={selectedMeme.name}
            className="meme-preview__image"
          />
        ) : (
          "Loading..."
        )}
      </div>
    </div>
  );
}

export default MemePreview;
