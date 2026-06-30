import React from "react";

function App(){

  let count=10
  function Greet(){
    alert("Is it correct ?")
  }
  return(
    <div>
      <h1>Welcome To React+Vite</h1>
      <h2>Like❤️</h2>
      <p>{count}</p>
      <button onClick={Greet}>Get Alert MSG</button>
    </div>
  )
}
export default App