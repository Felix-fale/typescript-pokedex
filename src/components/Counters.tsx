import { useState } from "react";

type CountersProps = {
  incr: () => void;
  count: number;
};

function Counters(props: CountersProps): JSX.Element {
  return (
    <div>
      <h2>Compteur</h2>
      {/* <p>Numero: {props.count}</p> */}
      <button onClick={props.incr}>Incrementer</button>
    </div>
  );
}

export default Counters;
