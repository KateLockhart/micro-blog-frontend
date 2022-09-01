import { Routes, Route } from "react-router-dom";

import { HomeView } from "./views/HomeView";
import { PostView } from "./views/PostView";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="post/:postId" element={<PostView />} />
      </Routes>
    </div>
  );
}

export default App;
