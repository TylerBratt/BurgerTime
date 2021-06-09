import React from "react";
import SingleBurg from "./SingleBurg";

export default function Results(props) {
  const { results } = props;
// console.log(results)
  return results.map(burger => {
    // console.log(burger)
    return <SingleBurg key={burger.id} {...burger} />;
  });
}
