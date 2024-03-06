import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { Projects } from "./pages/Projects";
import { Dashboard } from "./pages/Dashboard";
import { Header } from "./components/Header";
import { FooterComponent } from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col items-center justify-center w-full min-h-screen">
        <Header />
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
      <FooterComponent />
    </BrowserRouter>
  );
}

export default App;
