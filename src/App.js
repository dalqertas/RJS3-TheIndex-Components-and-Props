import React from "react";
import Sidebar from "./Sidebar";
import Content from './Content';
function App() {
  return (
    <div id="app" className="container-fluid">
      <div className="row">
      <Sidebar/>
      <Content/>
      </div>
    </div>
  );
}

export default App;
