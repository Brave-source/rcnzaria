import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "../Admin/Components/Layout/Layout";
import AllSermons from "../Admin/pages/AllSermons";
import UpdateHeroImg from "../Admin/pages/UpdateHeroImg";
import UploadSermon from "../Admin/pages/UploadSermon";
import Login from "../Admin/pages/Login";

const AdminPages = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="upload-sermons" />} />
        <Route path="upload-sermons" element={<UploadSermon />} />
        <Route path="update-heroImg" element={<UpdateHeroImg />} />
        <Route path="Sermons" element={<AllSermons />} />
        <Route path="Login" element={<Login />} />
      </Routes>
    </Layout>
  );
};

export default AdminPages;
