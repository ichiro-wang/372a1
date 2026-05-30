import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import { Toaster } from "react-hot-toast";
import lebronCry from "./assets/lbj-cry.png";
import lebronSmile from "./assets/lbj-smile.png";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 5000,
            icon: <img src={lebronSmile} alt="success" className="object-contain h-16" />,
          },
          error: {
            duration: 5000,
            icon: <img src={lebronCry} alt="error" className="object-contain h-16" />,
          },
          style: {
            fontSize: "1.3rem",
            fontFamily: "var(--font-lakers)",
            fontStyle: "italic",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--color-lakers-gold)",
            color: "var(--color-lakers-purple)",
            border: "3px solid var(--color-lakers-purple)",
            gap: "10px",
          },
        }}
      />
    </>
  );
}

export default App;
