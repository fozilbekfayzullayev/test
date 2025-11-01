import React, { Suspense } from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="main-layout">
      <Navbar />
      <main>
        <Suspense fallback={<p>hatolik...</p>}>
          <Outlet />
        </Suspense>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
