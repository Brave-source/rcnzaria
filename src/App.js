import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Logo } from "./components/Navigation/Navbar";
import AdminPages from "./Routers/AdminPages";
import MainPages from "./Routers/MainPages";

function App() {
  return (
    <>
      <Suspense
        fallback={
          <div className="w-screen h-screen uppercase bg-white tracking-widest flex flex-col gap-6 items-center justify-center">
            <div className="w-full animate-bounce flex justify-center">
              <Logo className="w-28" />
            </div>
            <p>Loading... Please wait</p>
          </div>
        }
      >
        <Routes>
          <Route path="*" element={<MainPages />} />
          <Route path="admin/*" element={<AdminPages />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
