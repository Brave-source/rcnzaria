import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";

const Home = lazy(() => import("././pages/Home"));

function App() {
  return (
    <>
      <Suspense fallback={<p>Loading</p>}>
        <Layout>
          <Routes>
            <Route path="/" element={<Navigate to="home" />} />
            <Route path="home" element={<Home />} />
            <Route path="/" element={<p>Texts</p>} />
          </Routes>
        </Layout>
      </Suspense>
    </>
  );
}

export default App;
