import React from "react";

type Props = {
  start: number;
};

function counter({ start }: Props) {
  return (
    <div>
      <h2>Compteur</h2>
      <p>Numero: {start}</p>
    </div>
  );
}

export default counter;
