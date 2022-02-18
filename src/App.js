import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/home";
import "./static/styles/style.scss";

function App() {
  return (
    <Layout>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
        </Routes>
      </Router>
    </Layout>
  );
}

export default App;
