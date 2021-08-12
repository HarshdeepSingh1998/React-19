import React from "react";
import Login from "./Login";

var isLoggedIn = false;
// function renderConditionally(){
//   if(isLoggedIn === true){
//       return <h1>Hi</h1>
//   }else{
//     return(
//     // <form className="form">
//     //  <input type="text" placeholder="Username" />
//     //  <input type="password" placeholder="Password" />
//     //  <button type="submit">Login</button>
//     // </form>
//        <Login />
//     );
//   }
// }

const currentTime = new Date().getHours();

function App() {
  return (
    <div className="container">
      {isLoggedIn ? <h1>Hi</h1> : <Login />}
      {currentTime < 12 && <h1>hello </h1>}
    </div>
  );
}

export default App;
