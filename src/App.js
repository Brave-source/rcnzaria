import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { Logo } from "./components/Navigation/Navbar";
import Audio from "./components/Sermons/Audio";

const Home = lazy(() => import("././pages/Home"));
const Registration = lazy(() => import("././pages/Registration"));
const ContactUs = lazy(() => import("././pages/ContactUs"));
const Live = lazy(() => import("././pages/LiveStream"));
const Partnership = lazy(() => import("././pages/Partnership"));
const Sermons = lazy(() => import("././pages/Sermons"));

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
        <Layout>
          <Audio />
          <Routes>
            <Route path="/" element={<Navigate to="home" />} />
            <Route path="home" element={<Home />} />
            <Route path="Registration" element={<Registration />} />
            <Route path="ContactUs" element={<ContactUs />} />
            <Route path="Live" element={<Live />} />
            <Route path="Partnership" element={<Partnership />} />
            <Route path="Sermons" element={<Sermons />} />
            <Route path="*" element={<p>Bad Route</p>} />
          </Routes>
        </Layout>
      </Suspense>
    </>
  );
}

export default App;
