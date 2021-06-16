import React from "react";
import SingleBurg from "./SingleBurg";

export default function Results(props) {
  const { results } = props;
  return results.map(burger => {
    return <SingleBurg key={burger.id} {...burger} />;
  });
}
