import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { UserContextProvider } from "./context/UserContext";
import PrivateRoute from "./components/PrivateRoute";
import Layout from "./components/Layout";
import "./static/styles/style.scss";
import GiftCard from "./pages/giftCard";
import Topup from "./pages/topup";
import Utility from "./pages/utility";
import Wallet from "./pages/wallet";

function App() {
  return (
    <Router>
      <UserContextProvider>
        <Layout>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/giftcard" element={<GiftCard />} />
            <Route path="/topup" element={<Topup />} />
            <Route path="/utility" element={<Utility />} />
            <Route path="/wallet" element={<Wallet />} />

            {/* private routes */}
            <Route path="/dashboard" element={<PrivateRoute />}>
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
          </Routes>
        </Layout>
      </UserContextProvider>
    </Router>
  );
}

export default App;
