import Headline from "../Headline/Headline";

function Meme({ meme = {} }) {
  return (
    <div className="meme-preview__meme">
      <Headline position="first" />
      <img src={meme.url} alt={meme.name} className="meme-preview__image" />
      <Headline position="last" />
    </div>
  );
}

export default Meme;
