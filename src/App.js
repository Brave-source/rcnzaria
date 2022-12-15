import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="home" element={<p>Home</p>} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
