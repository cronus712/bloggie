import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./Create";
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/create" element={<Create />}></Route>
            <Route path="/blogs/:id" element={<BlogDetails />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;
