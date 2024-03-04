import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { Projects } from "./pages/Projects";
import { Dashboard } from "./pages/Dashboard";
import { Header } from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="min-h-screen w-full justify-center items-center flex">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
      <div className="">a</div>
    </BrowserRouter>
  );
}

export default App;
