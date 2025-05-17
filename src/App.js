import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  // 获取当前 basename，便于支持不同的部署环境
  const getBasename = () => {
    // 从当前 URL 中提取 basename
    const url = window.location.pathname;
    const pathSegments = url.split("/").filter(Boolean);

    // 如果路径中包含 projects、about 或 contact，认为没有 basename
    if (["projects", "about", "contact"].includes(pathSegments[0])) {
      return "/";
    }

    // 否则第一个段作为 basename
    return pathSegments.length > 0 ? `/${pathSegments[0]}` : "/";
  };

  useEffect(() => {
    // 模拟页面加载
    setTimeout(() => {
      setLoading(false);
    }, 1500);

    console.log("应用运行在:", window.location.origin);
    console.log("当前路径:", window.location.pathname);
    console.log("使用的 basename:", getBasename());
  }, []);

  return (
    <Router basename={getBasename()}>
      <ScrollToTop />
      <div className="App">
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div
              key="loader"
              className="loader-container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="loader"
                animate={{
                  rotate: 360,
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeInOut",
                }}
              />
              <motion.p
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                加载中...
              </motion.p>
            </motion.div>
          ) : (
            <motion.div
              key="app-content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Navbar isMobile={isMobile} />
              <main className="main-content">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </main>
              <Footer />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
