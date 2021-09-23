import { useEffect, useState } from "react";
import Meme from "../Meme/Meme";

async function fetchMemes() {
  const response = await fetch("https://api.imgflip.com/get_memes");
  const result = await response.json();
  return await result;
}

function MemeGenerator() {
  const [isFetched, setIsFetched] = useState(false);
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    fetchMemes().then((object) => setMemes(object.data.memes));
    setIsFetched(true);
    return () => setIsFetched(false);
  }, [isFetched]);

  const [selectedMeme, setSelectedMeme] = useState({});
  useEffect(() => {
    setSelectedMeme(memes[8]);
  }, [memes]);

  const getRandomMeme = (array) => {
    const randomIndex = Math.floor(Math.random() * (array.length - 1));
    return array[randomIndex];
  };

  const handleOnClick = (e) => {
    e.preventDefault();
    const randomMeme = getRandomMeme(memes);
    setSelectedMeme(randomMeme);
  };

  return (
    <div className="meme-generator">
      <Meme meme={selectedMeme} />
      <button className="meme-generator__random btn" onClick={handleOnClick}>
        Random image
      </button>
    </div>
  );
}

export default MemeGenerator;
