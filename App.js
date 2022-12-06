import React from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";

function App() {
  return (
    //BEM-Block Element Modifier is a methodology, that helps you to achieve reusable components and code sharing in the front-end.

    <div className="App">
     
      <Sidebar/>

      <Feed/>

      <Widgets/>
    </div>
  );
}

export default App;
