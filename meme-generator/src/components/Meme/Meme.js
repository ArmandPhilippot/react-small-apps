import Headline from "../Headline/Headline";

function Meme({ meme = {} }) {
  return (
    <div className="meme-generator__meme">
      <Headline position="first" />
      <img src={meme.url} alt={meme.name} className="meme-generator__img" />
      <Headline position="last" />
    </div>
  );
}

export default Meme;
