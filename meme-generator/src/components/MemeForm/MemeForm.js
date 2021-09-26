import Form from "../commons/Form";
import MemeFieldset from "./MemeFieldset/MemeFieldset";

function MemeForm({ headlines, setHeadlines }) {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  const fieldsetsList = headlines.map((headline) => {
    return (
      <MemeFieldset
        key={headline.id}
        headline={headline}
        setHeadline={setHeadlines}
      />
    );
  });

  return (
    <div className="meme-form">
      <Form onSubmitHandler={onSubmit}>{fieldsetsList}</Form>
    </div>
  );
}

export default MemeForm;
