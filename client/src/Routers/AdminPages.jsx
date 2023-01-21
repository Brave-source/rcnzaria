import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "../Admin/Components/Layout/Layout";
import AllSermons from "../Admin/pages/AllSermons";
import UpdateHeroImg from "../Admin/pages/UpdateHeroImg";
import UploadSermon from "../Admin/pages/UploadSermon";
import Login from "../Admin/pages/Login";
import { useSelector } from "react-redux";

const AdminPages = () => {
  const admin = useSelector((state) => state.user.currentUser);
  return (
    <Layout>
      <Routes>
        <Route path="/login" element={<Login />} />
        {admin !=null ? (
          <>
            <Route path="/" element={<Navigate to="login" />} />
            <Route path="upload-sermons" element={<UploadSermon />} />
            <Route path="update-heroImg" element={<UpdateHeroImg />} />
            <Route path="Sermons" element={<AllSermons />} />
            <Route path="Login" element={<Login />} />
          </>
        ): (
          <Route path="/" element={<Navigate to="login" />} />
        )}
      </Routes>
    </Layout>
  );
};

export default AdminPages;
