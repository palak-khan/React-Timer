import { useState } from "react";

const App = () => {
  const [a, seta] = useState(12);

  const counterHandler = () => {
    seta(a + 1);
    console.log(a + 1);
  };
  return (
    <div>
      <h1>{a}</h1>
      <button onClick={counterHandler}>Click Me</button>
    </div>
  );
};

export default App;
