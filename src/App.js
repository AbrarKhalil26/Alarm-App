import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Alarm, Clock, Settings, StopWatch, Timer } from "./pages";
import { useSelector } from "react-redux";
import Navbar from "./layout/Navbar";
import Menu from "./layout/Menu";
import "./App.css";
import Sidebar from "./layout/Sidebar";

function App() {
  const darkMode = useSelector((state) => state.global.darkMode);
  // const isSidebarVisible = useSelector((state) => state.global.sidebar); 
  const isSidebarVisible = true;

  return (
    <BrowserRouter>
      <div className={darkMode && 'dark'}>
        <div className={`dark:bg-zinc-800 dark:text-white h-screen`}>
          <Navbar />

          <div className="flex h-calc-90">
            {isSidebarVisible ? <Sidebar /> : <Menu />}
            <div className="ml-24 pl-8 pr-12 mt-20 pt-6 w-full h-full overflow-auto">
              <Routes>
                <Route path="/" element={<Clock />} />
                <Route path="/alarm" element={<Alarm />} />
                {/* <Route path="/timer" element={<Timer />} />
                <Route path="/stopwatch" element={<StopWatch />} />
                <Route path="/setting" element={<Settings />} /> */}
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
