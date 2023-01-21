import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Audio from "../components/Sermons/Audio";

const Home = lazy(() => import("../pages/Home"));
const Registration = lazy(() => import("../pages/Registration"));
const ContactUs = lazy(() => import("../pages/ContactUs"));
const SermonDetails = lazy(() => import("../pages/SermonDetails"));
const Sermons = lazy(() => import("../pages/Sermons"));

const MainPages = (params) => {
  return (
    <Layout>
      <Audio />
      <Routes>
        <Route path="/" element={<Navigate to="home" />} />
        <Route path="home" element={<Home />} />
        <Route path="Registration" element={<Registration />} />
        <Route path="ContactUs" element={<ContactUs />} />
        <Route path="/sermons/:month/:year" element={<SermonDetails />} />
        <Route path="Sermons" element={<Sermons />} />
        <Route
          path="*"
          element={
            <p className="text-center text-4xl font-black flex flex-col justify-evenly absolute top-[20%] left-1/2 -translate-x-1/2 tracking-widest text-orange-500">
              404 ERROR <span>PAGE NOT FOUND</span>
            </p>
          }
        />
      </Routes>
    </Layout>
  );
};

export default MainPages;
