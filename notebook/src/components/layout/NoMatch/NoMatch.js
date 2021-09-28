import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function NoMatch({ setCurrentPage }) {
  const location = useLocation();

  useEffect(() => {
    setCurrentPage({
      id: null,
      body: "",
      title: "404",
      url: `/404`,
    });
  }, [setCurrentPage]);

  return (
    <div>
      {location.state
        ? `No match for ${location.state.from}`
        : "Page not found."}
    </div>
  );
}

export default NoMatch;
