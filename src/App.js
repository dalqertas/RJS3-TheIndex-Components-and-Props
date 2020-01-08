import React from "react";
import Sidebar from "./Sidebar";
import AuthorList from "./AuthorList";
function App() {
  return (
    <div id="app" className="container-fluid">
      <div className="row">
      <Sidebar/>
      <AuthorList />
      </div>
    </div>
  );
}

export default App;
