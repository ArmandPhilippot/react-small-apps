import Headline from "../Headline/Headline";

function Meme({ headlinesList, meme = {} }) {
  return (
    <div className="meme-preview__meme">
      {headlinesList.map((headline) => {
        return <Headline key={headline.id} headlineSettings={headline} />;
      })}
      <img src={meme.url} alt={meme.name} className="meme-preview__image" />
    </div>
  );
}

export default Meme;
