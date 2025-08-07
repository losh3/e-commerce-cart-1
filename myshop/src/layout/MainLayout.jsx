import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import "../styles/mainlayout.css";

export default function MainLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSidebarOpen(false); // Cierra automáticamente al llegar a 768 o menos
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="layout-container d-flex">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div
        className={`main-content flex-grow-1 ${
          sidebarOpen ? "content-expanded" : "content-collapsed"
        }`}
      >
        {/* Header siempre visible */}
        <div className="p-3 bg-light d-flex justify-content-between align-items-center border-bottom sticky-top z-3 header">
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        </div>

        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
